// import { useRef } from "react";
// import { useForm, SubmitHandler } from "react-hook-form";
// import ReCAPTCHA from "react-google-recaptcha";

// type Inputs = {
//   example: string;
//   exampleRequired: string;
// };

// function Captcha() {

//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm<Inputs>()
//   const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

//   console.log(watch("example"))


//     const recaptchaRef = useRef<ReCAPTCHA>();
  
//     const onSubmitWithReCAPTCHA = async () => {
//       const token = await recaptchaRef?.current?.executeAsync();
  
//     }

  

//   return (
//     <div>
      
 



//       <form onSubmit={handleSubmit(onSubmit) && onSubmitWithReCAPTCHA}>
//         <input defaultValue="test" {...register("example")} />
//         <input {...register("exampleRequired", { required: true })} />
//         {errors.exampleRequired && <span>This field is required</span>}
//         <input type="submit" />

//         <ReCAPTCHA
//         ref={recaptchaRef}
//         size="invisible"
//         sitekey="your client site key"
//       />


//       </form>
//     </div>
//   );
// }

// export default Captcha;
