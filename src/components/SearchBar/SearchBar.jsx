import React from "react";
import { Button } from "../../elements/Button/Button";
import { InputField } from "../../elements/InputField/InputField";

export const SearchBar = () => {
  return (
    <div className="container mx-auto flex flex-col justify-center  items-center mt-10 ">
      <div className="relative">
        <div class="absolute top-4 left-3"> </div>
        <InputField></InputField>
        <div class="absolute top-2 right-2"></div>
        <Button></Button>
      </div>
    </div>
  );
};
