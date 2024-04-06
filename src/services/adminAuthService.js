import { APIPath } from "utility/constant";
import { BaseService } from "./baseService";

class AdminAuth {
  getUserAuth = () => {
    return BaseService.get(APIPath.getUserAuthDetails);
  };
  logout = () => {
    return BaseService.get(APIPath.logoutGoogle);
  };
}

const AdminAuthService = new AdminAuth();
Object.freeze(AdminAuthService);
export { AdminAuthService };
