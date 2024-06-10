import { useState, useRef } from 'react';
// import Button from '../Button/Button';
import { InputText } from "primereact/inputtext";

import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import './Form-control.css';

let counter = 0;

const FormControl = (props, event) => {
  // const [users, setuser] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const today = new Date().toLocaleDateString("fa-IR");
  const toastBottomRight = useRef(null);
  
  const addUserHandler = (event) => {
    event.preventDefault();
    counter++;
    const newUser = {
      code: counter,
      name: name,
      age: age,
      registeryDate: today,
    };
    let toastData;

    if ((!name && !age) || !name || !age) {
      toastData = {
        severity: 'error',
        summary: 'خطا',
        detail: 'لطفا مثل آدم فیلد ها را پر کنید'
      }
    } else {
      props.getUsers(newUser);
      setName("");
      setAge("");

      toastData = {
        severity: 'success',
        summary: 'موفقیت',
        detail: 'user با موفقیت ایجاد شد'
      }
    }
    toastBottomRight.current.show({
      severity: toastData.severity,
      summary: toastData.summary,
      detail: toastData.detail,
      life: 3000,
    });

  };

  const inputNameHandler = (event) => {
    setName(event.target.value);
  };

  const inputAgeHandler = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <form className="form-control" onSubmit={addUserHandler}>
        <div className="name-control">
          <label htmlFor="username">نام :</label>
          <InputText
            className="p-inputtext-sm"
            id="username"
            aria-describedby="username-help"
            onChange={inputNameHandler}
            value={name}
          />
        </div>
        <div className="age-control">
          <label htmlFor="username">سن :</label>
          <InputText
            className="p-inputtext-sm"
            id="username"
            keyfilter="int"
            aria-describedby="username-help"
            onChange={inputAgeHandler}
            value={age}
          />
        </div>
        <Button className="button" label="اضافه کردن" size="small" raised />
        <Toast ref={toastBottomRight} position="bottom-right" />
      </form>
    </>
  );
};

export default FormControl