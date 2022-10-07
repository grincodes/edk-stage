// import { BaseFakeRepo } from "../../../../../core/tests/BaseFakeRepo";
// export class FakeArtistRepo
//   extends BaseFakeRepo<Artist>
//   implements IArtistRepo
// {
//   constructor() {
//     super();
//   }
//   public findByArtistId(artistId: string): Promise<Artist> {
//     return this.findById(artistId);
//   }
//   public async removeArtistById(artistId: string): Promise<void> {
//     this._items = this._items.filter((a) => a.id.toString() !== artistId);
//   }
//   public async findById(artistId: string): Promise<Artist> {
//     const matches = this._items.filter((a) => a.id.toString() === artistId);
//     if (matches.length === 0) {
//       return null;
//     } else {
//       return matches[0];
//     }
//   }
//   public async findByArtistName(name: string): Promise<Artist> {
//     const matches = this._items.filter(
//       (a) => a.name.value.toLowerCase() === name.toLowerCase()
//     );
//     if (matches.length === 0) {
//       return null;
//     } else {
//       return matches[0];
//     }
//   }
//   public async exists(artist: Artist): Promise<boolean> {
//     const found = this._items.filter((i) => this.compareFakeItems(i, artist));
//     return found.length !== 0;
//   }
//   public async save(artist: Artist): Promise<Artist> {
//     const alreadyExists = await this.exists(artist);
//     if (alreadyExists) {
//       this._items.map((i) => {
//         if (this.compareFakeItems(i, artist)) {
//           return artist;
//         } else {
//           return i;
//         }
//       });
//     } else {
//       this._items.push(artist);
//     }
//     return artist;
//   }
//   public compareFakeItems(a: Artist, b: Artist): boolean {
//     return a.id.equals(b.id);
//   }
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFrZVVzZXJSZXBvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvdXNlcnMvcmVwb3MvdGVzdHMvZmFrZXMvZmFrZVVzZXJSZXBvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlFQUF5RTtBQUV6RSw4QkFBOEI7QUFDOUIsaUNBQWlDO0FBQ2pDLDJCQUEyQjtBQUMzQixJQUFJO0FBQ0osb0JBQW9CO0FBQ3BCLGVBQWU7QUFDZixNQUFNO0FBRU4sK0RBQStEO0FBQy9ELHNDQUFzQztBQUN0QyxNQUFNO0FBRU4scUVBQXFFO0FBQ3JFLDZFQUE2RTtBQUM3RSxNQUFNO0FBRU4sK0RBQStEO0FBQy9ELCtFQUErRTtBQUMvRSxrQ0FBa0M7QUFDbEMscUJBQXFCO0FBQ3JCLGVBQWU7QUFDZiwyQkFBMkI7QUFDM0IsUUFBUTtBQUNSLE1BQU07QUFFTixtRUFBbUU7QUFDbkUsMENBQTBDO0FBQzFDLGlFQUFpRTtBQUNqRSxTQUFTO0FBQ1Qsa0NBQWtDO0FBQ2xDLHFCQUFxQjtBQUNyQixlQUFlO0FBQ2YsMkJBQTJCO0FBQzNCLFFBQVE7QUFDUixNQUFNO0FBRU4sNERBQTREO0FBQzVELGlGQUFpRjtBQUNqRixpQ0FBaUM7QUFDakMsTUFBTTtBQUVOLHlEQUF5RDtBQUN6RCx1REFBdUQ7QUFDdkQsMkJBQTJCO0FBQzNCLGlDQUFpQztBQUNqQyxrREFBa0Q7QUFDbEQsMkJBQTJCO0FBQzNCLG1CQUFtQjtBQUNuQixzQkFBc0I7QUFDdEIsWUFBWTtBQUNaLFlBQVk7QUFDWixlQUFlO0FBQ2Ysa0NBQWtDO0FBQ2xDLFFBQVE7QUFFUixxQkFBcUI7QUFDckIsTUFBTTtBQUVOLDZEQUE2RDtBQUM3RCxnQ0FBZ0M7QUFDaEMsTUFBTTtBQUNOLElBQUkifQ==