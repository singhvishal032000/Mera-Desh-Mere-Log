import React from "react";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

export default function LatestJobCards({ job }) {
  const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`/description/${job._id}`)}  className="p-5 rounded-md shadow-xl bg-white border border-gray-200 cursor-pointer">
      <div>
        <h1 className="font-medium text-lg">{job?.company?.name}</h1>
        <p className="text-sm text-gray-500">India</p>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">{job?.title}</h1>
        <p className="text-sm text-gray-600">{job?.description}</p>
      </div>
      <div className="flex items-center mt-4 gap-2">
        <Badge className={"font-bold"}>{job?.position}</Badge>
        <Badge className={" font-bold"}>{job?.jobType}</Badge>
        <Badge className={"font-bold"}>{job?.salary}/Day</Badge>
      </div>
    </div>
  );
}
