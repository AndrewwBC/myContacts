import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import NewContact from "./pages/NewContact";
import EditContact from "./pages/EditContact";
import CategoriesList from "./pages/Categories";
import NewCategorie from "./pages/NewCategorie";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/new" component={NewContact} />
      <Route path="/categories" component={CategoriesList} />
      <Route path="/newcategorie" component={NewCategorie} />
      <Route path="/edit/:d" component={EditContact} />
    </Switch>
  );
}
