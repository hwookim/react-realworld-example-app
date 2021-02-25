import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";

import { Profile } from "../../type";
import $api from "../../api";
import { EMPTY_PROFILE } from "../../utils/constants";

export interface Props {
  username: Profile["username"];
}

export default function ProfilePage({
  match,
}: RouteComponentProps<Props>): JSX.Element {
  const { username } = match.params;
  const [, setLoading] = useState<boolean>(true);
  const [profile, setProfile] = useState<Profile>(EMPTY_PROFILE);

  const loadUser = async () => {
    const { profile } = await $api.user.getProfile(username);
    setProfile(profile);
  };

  useEffect(() => {
    setLoading(true);
    loadUser();
    return () => setLoading(false);
  }, [username]);

  return (
    <div className="profile-page">
      <div className="user-info">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <img
                src={profile.image}
                className="user-img"
                alt={profile.username}
              />
              <h4>{profile.username}</h4>
              <p>{profile.bio}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">ArticleList</div>
        </div>
      </div>
    </div>
  );
}
