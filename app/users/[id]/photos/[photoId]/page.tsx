import React from "react";
type Props = {
  params: { id: number; photoId: number };
};

const UserPhotos = async ({ params: { id, photoId } }: Props) => {
  return (
    <div>
      UserPhotos {id} {photoId}
    </div>
  );
};

export default UserPhotos;
