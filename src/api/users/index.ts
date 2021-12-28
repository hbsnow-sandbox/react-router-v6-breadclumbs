import { mockMethods } from "aspida-mock";

import { User } from "../../types/api";
import { users } from "./$users";

export type Methods = {
  get: {
    resBody: User[];
  };
};

export default mockMethods<Methods>({
  get: () => ({
    status: 200,
    resBody: users,
  }),
});
