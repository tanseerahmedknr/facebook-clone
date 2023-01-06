import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { IoMdPhotos } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from "axios";

const FACEBOOK_CLONE_ENDPOINT = "";

const CreatePosts = () => {
  const { data: session } = useSession();
  // useRef Hooks default value as null
  const inputRef = useRef(null);
  const hiddenFileInput = useRef(null);

  // Displaying the selected image and maintaing the state
  const [imageToPost, setImageToPost] = useState(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e) => {
        setImageToPost(e.target.result);
      };
    }
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  // No page refresh
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputRef.current.value()) return;

    const formData = new FormData();
    formData.append("file", imageToPost);
    formData.append("post", inputRef.current.value);
    formData.append("name", session?.user.name);
    formData.append("email", session?.user.email);
    formData.append("profilePic", session?.user.image);

    //Axios is a promised-based HTTP client for JavaScript. It has the ability to make HTTP requests from the browser and handle the transformation of request and response data.
    axios
      .post(FACEBOOK_CLONE_ENDPOINT, formData, {
        headers: { Accept: "application/json" },
      })
      .then((response) => {
        inputRef.current.value = "";
        removeImage();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-white rounded-md shadow-md text-gray-500 p-2">
      <div className="flex p-4 space-x-2 items-center">
        <Image
          src={session?.user.image}
          height={40}
          width={40}
          className="rounded-full cursor-pointer"
        />
        <form className="flex flex-1">
          <input
            className="rounded-full h-12 px-4 bg-gray-100 font-semibold focus:outline-none flex-grow"
            type="text"
            ref={inputRef}
            placeholder={`What's on your mind, ${session?.user.name}?`}
          ></input>
          <button hidden onClick={handleSubmit}></button>
        </form>
      </div>

      {imageToPost && (
        <div
          onClick={removeImage}
          className="flex items-center px-4 py-2 space-x-4 filter hover:brightness-110 transition duration-150 cursor-pointer"
        >
          <img src={imageToPost} className="h-12 object-contain" />
          <RiDeleteBin6Line className="h-15 hover:text-red-500" />
        </div>
      )}

      {/* Buttons */}
      <div className="flex justify-evenly py-2">
        <div className="flex items-center justify-center p-1 space-x-1 flex-grow hover:bg-gray-100 rounded-md hover:cursor-pointer">
          <HiOutlineVideoCamera size={20} className="text-red-500" />
          <p className="font-semibold text-gray-500">Live Video</p>
        </div>

        <div
          onClick={handleClick}
          className="flex items-center justify-center p-1 space-x-1 flex-grow hover:bg-gray-100 rounded-md hover:cursor-pointer"
        >
          <IoMdPhotos size={20} className="text-green-500" />
          <p className="font-semibold text-gray-500">Photo/Video</p>

          {/* Only accepts Images */}
          <input
            onChange={addImageToPost}
            type="file"
            ref={hiddenFileInput}
            hidden
            accept="image/*"
          />
        </div>

        <div className="flex items-center justify-center p-1 space-x-1 flex-grow hover:bg-gray-100 rounded-md hover:cursor-pointer">
          <BsEmojiSmile size={20} className="text-yellow-500" />
          <p className="font-semibold text-gray-500">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};

export default CreatePosts;
