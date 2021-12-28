import { mockMethods } from "aspida-mock";

import { users } from "../$users";
import { User } from "../../../types/api";

export type Methods = {
  get: {
    resBody: User;
  };
};

export default mockMethods<Methods>({
  get: ({ values }) => {
    const { id } = values;

    const user = users.find((user) => user.id === id);

    if (!user) {
      return {
        status: 404,
      };
    }

    return {
      status: 200,
      resBody: user,
    };
  },
});
