import { UniqueEntityID } from "../../../../core/domain/UniqueEntityID";
import { Result } from "../../../../core/logic/Result";
import { Url } from "../../../../shared/domain_types/Url";
import { TextUtils } from "../../../../utils/TextUtils";
import { ShopId } from "../../../shop/domain/shopId";
import { Product } from "../../domain/product";
import { Product360Video } from "../../domain/product360Video";
import { ProductCategoryId } from "../../domain/productCategoryId";
import { Slug } from "../../domain/slug";
import { CreateProductDTO } from "../../useCases/createProduct/createProductDTO";
import { ProductService, VariantsResponse } from "../productService";

let productDTO = {
   product_name: "gucci top",
  product_description: "gucci mane top",
  product_category_id: "e89abbb8-4607-4812-a697-97ee359a5287",
  shop_id: "0dde96fa-8d6b-4c5e-8db8-b8ee8017771f",
  product_360_video_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
  variants: [
      {
        variant_name: "red-velvet",
        retail_price: 0,
        sizes: [{
            attr_val_id:"d988475c-9093-4c1f-9fb7-7116a6dfbd62",
            price:3000,
            quantity:40
        }],
        images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"]
      },

      {
        variant_name: "blue-velvet",
        retail_price: 0,
        sizes: [{
            attr_val_id:"d988475c-9093-4c1f-9fb7-7116a6dfbd62",
            price:3000,
            quantity:40
        }],
        images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"]
      },

      {
        variant_name: "red-velvet",
        retail_price: 0,
        sizes: [{
            attr_val_id:"d988475c-9093-4c1f-9fb7-7116a6dfbd62",
            price:2000,
            quantity:20
        }],
        images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"]
      },

  ]
}



describe("Product Service",()=>{
    beforeEach(()=>{
        productDTO
    })

    it("should return an array of 3 objects if dto is valid",()=>{

        // craft out product from dto
        let product = craftProductFromDTO(productDTO)

        let product360Video = 
        product != null ? craftProduct360Video(productDTO.product_360_video_url,product.id):null
        
        let res =ProductService.validateAllVariants(productDTO.variants,product.productId)
        
        if(res.isLeft()){
            throw new Error("product validation error");
            
        }

            

        expect(res.value).toHaveLength(3)
 
    })

    // it("should throw if product category is invalid",()=>{
    //     //invalid prod cat
    //     productDTO.product_category_id = "lmb"
    //     // craft out product from dto
    //     expect(()=>{
    //         craftProductFromDTO(productDTO)
    //     }).toThrow()

    // })

    // it("should throw if product service cannot validate productDto",()=>{
    //     // craft out product from dto
    //     let product = craftProductFromDTO(productDTO)

    //     // invalid prod variant name
    //     productDTO.variants[0].variant_name=""
    //     let res =ProductService.validateAllVariants(productDTO.variants,product.productId)
         
    //     expect(()=>{
    //         validateVariants(res)
    //     }).toThrow()
    // })




})




function craftProductFromDTO(req:CreateProductDTO){

    const productSlug = Slug.create(req.product_name);
    const shopIdOrError = UniqueEntityID.isValidId(req.shop_id) ? ShopId.create(new UniqueEntityID(req.shop_id)) : Result.fail<ShopId>('Invalid shop id');

    const productCategoryIdOrError = UniqueEntityID.isValidId(req.product_category_id)
      ? ProductCategoryId.create(new UniqueEntityID(req.product_category_id))
      : Result.fail<ProductCategoryId>('Invalid category id');

    const productWebId = TextUtils.createRandomNumericString(7);

    const combinedPropsResult = Result.combine([shopIdOrError, productCategoryIdOrError]);

    if (combinedPropsResult.isFailure) {
      throw new Error(combinedPropsResult.error);
      
    }

    const productOrError = Product.create({
      productName: req.product_name,
      productDescription: req.product_description,
      productCategoryId: productCategoryIdOrError.getValue(),
      shopId: shopIdOrError.getValue(),
      productWebId: Number(productWebId),
      productSlug: productSlug.getValue(),
      isActive: true
    });

    if (productOrError.isFailure) {
      throw new Error(productOrError.error.toString());
      
    }

    const product: Product = productOrError.getValue();

   return product 

}

function craftProduct360Video(product_360_video_url:string,product_id:UniqueEntityID){
     const v360UrlOrError = Url.create(product_360_video_url);

    if (v360UrlOrError.isFailure) {
       throw new Error(v360UrlOrError.error.toString());
       
    }

    const product360VideoOrError = Product360Video.create({
      productId: product_id,
      url: v360UrlOrError.getValue()
    });

    if (product360VideoOrError.isFailure) {
      throw new Error(product360VideoOrError.error.toString());
      
    }

    const product360Video = product360VideoOrError.getValue();
    return product360Video
    
}

function validateVariants(res){
    if(res.isLeft()){
        throw new Error(res.error.toString());
    }
    return res.value
}