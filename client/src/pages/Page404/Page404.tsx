import { Page } from "../../components";

function Page404() {

  const css = `
  .404-page{
    font-family: cursive;
  }
  `

  return (
    <Page>
      <div className="page-404">
        <style>{css}</style>
        <h1 className="page-404__title">404: Not Found</h1>
        <img src="https://media.tenor.com/W8SPIcveMvUAAAAd/giraffe-hi.gif"></img>
        
      </div>
    </Page>
  );
}

export default Page404;
