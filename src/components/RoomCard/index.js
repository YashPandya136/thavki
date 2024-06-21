import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";


const RoomCard = ({ imageUrl, title }) => {
  return (
    <>
      <Card className="border-none min-h-[50px] bg-primary shadow-secondaryBottom text-accent">
        <CardContent className="pt-5">
          <img
            src={imageUrl}
            alt={title}
            className="object-cover w-full rounded"
          />
        </CardContent>
        <CardHeader className="pt-0 text-lg font-bold">{title}</CardHeader>
      </Card>
    </>
  );
};

export default RoomCard;
