// import { useForm, SubmitHandler } from "react-hook-form";

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



//   return (
//     <div>
      



//       <form onSubmit={handleSubmit(onSubmit)}>
//         <input defaultValue="test" {...register("example")} />
//         <input {...register("exampleRequired", { required: true })} />
//         {errors.exampleRequired && <span>This field is required</span>}
//         <input type="submit" />
//       </form>
//     </div>
//   );
// }

// export default Captcha;






















<script src="https://www.google.com/recaptcha/api.js" async defer></script>


function Captcha() {


    function onSubmit(token: string) {
        const form = document.getElementById("demo-form") as HTMLFormElement | null;
        if (form) {
            form.submit();
        }
    }
    

  return (
    <div>
      <form id="demo-form" action="?" method="POST">
        <button className="g-recaptcha" data-sitekey="6LdQdl4pAAAAACeydbb3hHOWdoWMysH9J_4SinEo" data-callback={onSubmit}>Submit</button>
        <br />
      </form>
    </div>
  );
}

export default Captcha; 


























