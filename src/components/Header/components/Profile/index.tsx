import {
  ProfileContainer,
  ProfileData,
  ProfileImage,
  ProfileSubtitle,
  ProfileTitle
} from "./styles";

function Profile() {
  return (
    <ProfileContainer>
      <ProfileImage src="https://github.com/IvanOliver131.png" />
      <ProfileData>
        <ProfileTitle>Ivan Oliveira</ProfileTitle>
        <ProfileSubtitle>Fullstack Developer | React | NodeJs</ProfileSubtitle>
      </ProfileData>
    </ProfileContainer>
  );
}

export { Profile };
