import { AxiosInstance } from "axios";
import { Profile } from "../../type";

export interface UserProfileResponse {
  profile: Profile;
}

export default function UserRepository(axios: AxiosInstance) {
  const getProfile = (
    username: Profile["username"]
  ): Promise<UserProfileResponse> =>
    axios.get(`/profiles/${username}`).then(({ data }) => data);

  return {
    getProfile,
  };
}
