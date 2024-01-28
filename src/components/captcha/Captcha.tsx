// import { useRef } from "react";
// import ReCAPTCHA from "react-google-recaptcha";
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  example: string
  exampleRequired: string
}

function Captcha() {
    // const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";
    // const reRef  = useRef<ReCAPTCHA | null>();


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<Inputs>()
      const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

      console.log(watch("example")) 
  return (
    <div>

        
    {/* const token  = await reRef.current.executeAsync() */}



{/* 
      <ReCAPTCHA sitekey={siteKey} 
      size="invisible"
      ref = {reRef}
      /> */}
























    </div>
  );
}

export default Captcha;
