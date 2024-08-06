# Banking App
 ### Initial Folder Setup
 * #### use shdcn doc to install next js react framework with typescript, tailwind css and eslint.
 * #### iniialize shadcn
   * ### N.B := Shadcn is UI library make our development fast and efficient. unlike other libraries we only install a specific component that we only use in our project. we don't have to download the whole content

#### Route Grouping in Next js
* #### Route grouping is a technique used to group related routes together. allow us to have different layout page for different routes.
* #### if our sign in and sign up page don't have a sidebar and home page does as a layout.
  * we can create `(auth)` folder and inside it `layout.tsx` file that don't contain sidebar. we can have `sign-in` and `sign-up` folder inside. by doing this we can group related routes sign-in and sign-up together with a common layout.
  * we can also create `(root)` folder for the homepage and others related routes who share sidebar layout.
  * `(...)` if we create folder with parenthesis the folder is considered as a grouping folder not included in the file based routing.