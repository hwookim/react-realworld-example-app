import { AxiosInstance } from "axios";
import { Profile, User } from "../../type";

export interface UserProfileResponse {
  profile: Profile;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: User;
}

export default function UserRepository(axios: AxiosInstance) {
  const login = (user: LoginRequest): Promise<LoginResponse> =>
    axios.post(`/users/login`, { user }).then(({ data }) => data);

  const getProfile = (
    username: Profile["username"]
  ): Promise<UserProfileResponse> =>
    axios.get(`/profiles/${username}`).then(({ data }) => data);

  return {
    login,
    getProfile,
  };
}
