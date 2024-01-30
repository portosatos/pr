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
                <button
                    className="g-recaptcha"
                    data-sitekey="6LdQdl4pAAAAAMZyXeHNLdl4t3CNi8c0ACglwmBo"
                    onClick={() => onSubmit("dummy-token")} 
                >
                    Отправить
                </button>
                <br />
            </form>
        </div>
    );
}

export default Captcha;
