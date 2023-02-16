import {useState} from 'react';//naming import/export

export default function useFormInputs(initialValue) {
    const [currentValue,setState] = useState(initialValue);

    function onChangeHandler(event){
       return setState(event.target.value);
    }

  return{
    value:currentValue,
    onChange:onChangeHandler
  }
}
