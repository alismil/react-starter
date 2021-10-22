import PageHeader from "./components/page-header";
import Place from "./components/place";
import PageFooter from "./components/page-footer";

function App(): JSX.Element {
  return (
    <>
      <PageHeader />
      <Place
        title={"Philippines is awesome!"}
        place={"Makati City"}
        country={"Philippines"}
        imageURL={
          "https://images.unsplash.com/photo-1597285952775-1382215fbff0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80"
        }
        googleMapsURL={"https://goo.gl/maps/beT7LdbZmsehkPS3A"}
        description={"Philippines is awesome!"}
      />
      <Place
        title={"Bora Bora has the best ocean and beaches"}
        place={"Bora Bora"}
        country={"French Polynesia"}
        imageURL={
          "https://images.unsplash.com/photo-1580725869538-9b164c27c44f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1932&q=80"
        }
        googleMapsURL={"https://goo.gl/maps/eZaa5FrpEJbMdekY6"}
        description={"Bora Bora has the best ocean and beaches"}
      />
      <Place
        title={"Whitsundays have the finest sand"}
        place={"Whitsunday islands"}
        country={"Australia"}
        imageURL={
          "https://images.unsplash.com/photo-1600791200866-aa1a25e13191?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1654&q=80"
        }
        googleMapsURL={"https://goo.gl/maps/KU7NGxBGDmLQFVWQ6"}
        description={"Whitsundays have the finest sand"}
      />
      <PageFooter />
    </>
  );
}

export default App;
