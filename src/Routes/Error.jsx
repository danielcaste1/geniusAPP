import React from "react";
import { Link } from "react-router-dom";
import { FaQuestion } from "react-icons/fa";

export default function ErrorPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full text-slate-50 bg-gradient-to-t from-slate-900 to-slate-800">
      <FaQuestion className="text-4xl my-3"></FaQuestion>
      <p className="text-xl font-semibold my-3">
        The resource you are looking for doesn't exists
      </p>
      <p className="text-xl font-light my-3">
        Click <Link className="underline" to=".." relative="path">here</Link> to go back
      </p>
      
    </div>
  );
}
