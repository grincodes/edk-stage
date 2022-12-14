"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
class BaseController {
    execute(req, res, authReq) {
        this.req = req;
        this.res = res;
        this.authReq = authReq;
        this.executeImpl();
    }
    static jsonResponse(res, code, message) {
        return res.status(code).json({ message });
    }
    ok(res, dto) {
        if (dto) {
            return res.status(200).json(dto);
        }
        else {
            return res.sendStatus(200);
        }
    }
    created(res) {
        return res.sendStatus(201);
    }
    clientError(message) {
        return BaseController.jsonResponse(this.res, 400, message ? message : "Unauthorized");
    }
    unauthorized(message) {
        return BaseController.jsonResponse(this.res, 401, message ? message : "Unauthorized");
    }
    paymentRequired(message) {
        return BaseController.jsonResponse(this.res, 402, message ? message : "Payment required");
    }
    forbidden(message) {
        return BaseController.jsonResponse(this.res, 403, message ? message : "Forbidden");
    }
    notFound(message) {
        return BaseController.jsonResponse(this.res, 404, message ? message : "Not found");
    }
    conflict(message) {
        return BaseController.jsonResponse(this.res, 409, message ? message : "Conflict");
    }
    tooMany(message) {
        return BaseController.jsonResponse(this.res, 429, message ? message : "Too many requests");
    }
    todo() {
        return BaseController.jsonResponse(this.res, 400, "TODO");
    }
    fail(error) {
        console.log(error);
        return this.res.status(500).json({
            message: error.toString()
        });
    }
}
exports.BaseController = BaseController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29yZS9pbmZyYS9CYXNlQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJQSxNQUFzQixjQUFjO0lBUTNCLE9BQU8sQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsT0FBbUI7UUFDN0UsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUE7UUFDZCxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQTtRQUNkLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO1FBRXRCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtJQUNwQixDQUFDO0lBRU0sTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFxQixFQUFFLElBQVksRUFBRSxPQUFlO1FBQzdFLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFBO0lBQzNDLENBQUM7SUFFTSxFQUFFLENBQUksR0FBcUIsRUFBRSxHQUFPO1FBQ3pDLElBQUksR0FBRyxFQUFFO1lBQ1AsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtTQUNqQzthQUFNO1lBQ0wsT0FBTyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1NBQzNCO0lBQ0gsQ0FBQztJQUVNLE9BQU8sQ0FBQyxHQUFxQjtRQUNsQyxPQUFPLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDNUIsQ0FBQztJQUVNLFdBQVcsQ0FBQyxPQUFnQjtRQUNqQyxPQUFPLGNBQWMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFBO0lBQ3ZGLENBQUM7SUFFTSxZQUFZLENBQUMsT0FBZ0I7UUFDbEMsT0FBTyxjQUFjLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQTtJQUN2RixDQUFDO0lBRU0sZUFBZSxDQUFDLE9BQWdCO1FBQ3JDLE9BQU8sY0FBYyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtJQUMzRixDQUFDO0lBRU0sU0FBUyxDQUFDLE9BQWdCO1FBQy9CLE9BQU8sY0FBYyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDcEYsQ0FBQztJQUVNLFFBQVEsQ0FBQyxPQUFnQjtRQUM5QixPQUFPLGNBQWMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ3BGLENBQUM7SUFFTSxRQUFRLENBQUMsT0FBZ0I7UUFDOUIsT0FBTyxjQUFjLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUNuRixDQUFDO0lBRU0sT0FBTyxDQUFDLE9BQWdCO1FBQzdCLE9BQU8sY0FBYyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtJQUM1RixDQUFDO0lBRU0sSUFBSTtRQUNULE9BQU8sY0FBYyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQTtJQUMzRCxDQUFDO0lBRU0sSUFBSSxDQUFDLEtBQXFCO1FBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDbEIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDL0IsT0FBTyxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUU7U0FDMUIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGO0FBdEVELHdDQXNFQyJ9