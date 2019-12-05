/*Vendors*/
import 'normalize.css';
import 'animate.css'

require("./variables.css");
require("./media.css");
require("./helpers.css");
require("./grid.css");
require("./icons.css");
require("./styles.css");
require("./fonts.css");
require("./forms.css");
require("./lazy-load.css");

/*All components*/

function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}
const modules = requireAll(require.context("./components", false, /.css$/));