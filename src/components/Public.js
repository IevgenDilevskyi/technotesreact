import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section className="public">
        <header>
            <h1>Welcome to <span className="nowrap">Eugene D. Repairs!</span></h1>
        </header>
        <main className="public__main">
            <p>Located in Beautiful Calgary, Eugene D. Repairs  provides a trained staff ready to meet your tech repair needs.</p>
            <address className="public__addr">
                Eugene D. Repairs<br />
                555 Mcleod Trail<br />
                Calgary, AB T2X7Y7<br />
                <a href="tel:+15555555555">(555) 555-5555</a>
            </address>
            <br />
            <p>Owner: Eugene Dilevskyi</p>
        </main>
        <footer>
            <Link to="/login">Employee Login</Link>
        </footer>
    </section>

)
return content
}

export default Public;
