// import { useState } from "react";
// import image from "./image.png"; // Default image
// import Desc from "./desc"; // Import the description component

// const componentsList = {
//   "Accordion": ["Basic", "Multi-Expand", "Animated"],
//   "Action Bar": ["Fixed", "Floating"],
//   "Action Button": ["Primary", "Secondary", "Danger"],
//   "Action Group": ["Vertical", "Horizontal"],
//   "Alert Banner": ["Success", "Warning", "Error"],
//   "Alert Dialog": ["Confirmation", "Dismissible"],
//   "Avatar": ["Small", "Medium", "Large"],
//   "Badge": ["Info", "Success", "Warning", "Danger"],
//   "Button": ["Primary", "Secondary", "Large", "Small"],
//   "Card": ["Basic", "Image", "With Actions"],
//   "Checkbox": ["Default", "Custom Icon"],
//   "Dialog": ["Modal", "Non-Modal"]
// };

// const imagePaths = {
//   "Basic": [image, image],
//   "Multi-Expand": ["/images/multi-expand1.png", "/images/multi-expand2.png"],
//   "Animated": ["/images/animated2.png"],
//   "Fixed": ["/images/fixed1.png", "/images/fixed2.png"],
//   "Floating": ["/images/floating1.png", "/images/floating2.png"],
//   "Primary": ["/images/primary1.png", "/images/primary2.png"],
//   "Secondary": ["/images/secondary1.png", "/images/secondary2.png"],
//   "Danger": ["/images/danger1.png", "/images/danger2.png"],
//   "Vertical": ["/images/vertical1.png", "/images/vertical2.png"],
//   "Horizontal": ["/images/horizontal1.png", "/images/horizontal2.png"],
//   "Success": ["/images/success1.png", "/images/success2.png"],
//   "Warning": ["/images/warning1.png", "/images/warning2.png"],
//   "Error": ["/images/error1.png", "/images/error2.png"],
//   "Confirmation": ["/images/confirmation1.png", "/images/confirmation2.png"],
//   "Dismissible": ["/images/dismissible1.png", "/images/dismissible2.png"],
//   "Small": ["/images/small1.png", "/images/small2.png"],
//   "Medium": ["/images/medium1.png", "/images/medium2.png"],
//   "Large": ["/images/large1.png", "/images/large2.png"],
//   "Info": ["/images/info1.png", "/images/info2.png"],
//   "Image": ["/images/image1.png", "/images/image2.png"],
//   "With Actions": ["/images/with-actions1.png", "/images/with-actions2.png"],
//   "Default": ["/images/default1.png", "/images/default2.png"],
//   "Custom Icon": ["/images/custom-icon1.png", "/images/custom-icon2.png"],
//   "Modal": ["/images/modal1.png", "/images/modal2.png"],
//   "Non-Modal": ["/images/non-modal1.png", "/images/non-modal2.png"]
// };

// export default function StorybookClone() {
//   const [selectedComponent, setSelectedComponent] = useState("");
//   const [selectedVariant, setSelectedVariant] = useState("");
//   const [search, setSearch] = useState("");
//   const [expandedComponents, setExpandedComponents] = useState([]);
//   const [showDesc, setShowDesc] = useState(false);

//   const filteredComponents = Object.keys(componentsList).filter((component) =>
//     component.toLowerCase().includes(search.toLowerCase())
//   );

//   const toggleComponent = (component) => {
//     setExpandedComponents((prev) =>
//       prev.includes(component)
//         ? prev.filter((item) => item !== component)
//         : [...prev, component]
//     );
//   };

//   const handleComponentClick = (component, variant = "") => {
//     setSelectedComponent(component);
//     setSelectedVariant(variant);
//     setShowDesc(false); // Hide "About This" when selecting a component or variant
//   };

//   const handleAboutClick = () => {
//     setShowDesc(true);
//     setSelectedComponent("");
//     setSelectedVariant("");
//   };

//   return (
//     <div className="flex h-screen w-full">
//       {/* Sidebar */}
//       <aside className="w-64 p-4 flex flex-col border-r border-gray-300">
//         <input
//           type="text"
//           placeholder="Find components"
//           className="mt-4 p-2 rounded border border-gray-400 outline-none"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />

//         {/* About This Button */}
//         <button
//           className={`mt-4 p-2 rounded hover:bg-blue-600 ${
//             showDesc ? "bg-blue-700 text-white" : "bg-blue-500 text-white"
//           }`}
//           onClick={handleAboutClick}
//         >
//           About This
//         </button>

//         <div className="mt-4 flex-1 overflow-auto">
//           {filteredComponents.map((component, index) => (
//             <div key={index}>
//               <button
//                 className="w-full text-left p-2 hover:text-blue-500"
//                 onClick={() => toggleComponent(component)}
//               >
//                 {component}
//               </button>
//               {expandedComponents.includes(component) && (
//                 <div className="ml-4 mt-1">
//                   {componentsList[component].map((variant, idx) => (
//                     <button
//                       key={idx}
//                       className="w-full text-left p-2 hover:text-blue-700 text-sm"
//                       onClick={() => handleComponentClick(component, variant)}
//                     >
//                       {variant}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6 bg-gray-100 flex flex-col">
//         {/* Show About Section */}
//         {showDesc && !selectedComponent && (
//           <div className="p-6 mb-6 bg-white shadow-md rounded-lg border border-gray-300">
//             <Desc />
//           </div>
//         )}

//         {/* Show Selected Component */}
//         {selectedComponent && (
//           <>
//             <h1 className="text-2xl font-semibold text-gray-800">{selectedComponent}</h1>
//             {selectedVariant && <p className="text-gray-600 mt-2">Selected Variant: {selectedVariant}</p>}

//             {/* Display images */}
//             {selectedVariant && imagePaths[selectedVariant] && (
//               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
//                 {imagePaths[selectedVariant].map((imgSrc, index) => (
//                   <img key={index} src={imgSrc} alt={`${selectedVariant} ${index + 1}`} className="rounded shadow-md w-full h-auto" />
//                 ))}
//               </div>
//             )}
//           </>
//         )}
//       </main>
//     </div>
//   );
// }
import { useState } from "react";
import image from "./image.png"; // Default image
import Desc from "./desc"; // Import the description component
import logo from "./logo.jpeg"
import { Info } from "lucide-react";

const componentsList = {
  "Text Inputs": ["Single-line input", "Password input", "Search bar input"],
  "Text Areas": ["Basic multi-line", "Auto-resizing text area", "With a character counter"],
  "Checkboxes": ["Basic checkbox", "Checkbox with label and description", "Checkbox group (multi-select)"],
  "Radio Buttons": ["Basic radio group", "With icons", "Inline radio group"],
  "Toggles & Switches": ["Basic toggle", "Toggle with icons (e.g. sun/moon)", "Labeled toggle"],
  "Dropdowns & Select Menus": ["Basic dropdown", "Dropdown with search", "Multi-select dropdown"],
  "Navigation Bars": ["Horizontal top navbar", "Sidebar navigation", "Mobile bottom nav"],
  "Breadcrumbs": ["Basic breadcrumb trail", "With icons", "Collapsed breadcrumb for long paths"],
  "Tabs": ["Basic horizontal tabs", "Vertical tabs", "Icon tabs"],
  "Pagination": ["Numbered pagination", "Prev/Next style", "With page jumper"],
  "Modals": ["Centered modal", "Full-screen modal", "Slide-in modal (side panel)"],
  "Tooltips": ["Top tooltip", "Hover-based with animation", "Tooltip with CTA"],
  "Toasts/Notifications": ["Success message", "Error alert", "Info message with action button"],
  "Alerts": ["Inline error message", "Warning banner", "Confirm alert box"],
  "Tables": ["Basic table", "Table with sorting/filtering", "Table with row actions"],
  "Cards": ["Basic content card", "Image card with CTA", "Product or pricing card"],
  "Lists": ["Bulleted list", "List with avatars", "Interactive list items"],
  "Badges": ["Status badge (e.g., active)", "Number badge (notifications)", "Icon badge"],
  "Buttons": ["Primary button", "Secondary/ghost button", "Icon button"],
  "Button Groups": ["Segmented controls", "Toolbar with multiple actions", "FAB with sub-actions"],
  "Basic Form": ["Name, email, message", "Login form", "Signup form"],
  "Advanced Layouts": ["Multi-step form", "Inline form", "Form in modal"],
  "Avatars": ["Initials avatar", "Image avatar", "Avatar with status dot"],
  "Image Displays": ["Responsive image grid", "Lightbox gallery", "Image with caption"],
  "Video Embeds": ["Embedded player", "Video with controls", "Auto-play muted thumbnail"],
  "Spinners": ["Circular spinner", "Dots animation", "Linear progress bar"],
  "Skeleton Screens": ["Text and image skeleton", "Card skeleton", "Table skeleton"],
  "Side Drawers": ["Left-side drawer", "Right-side with settings", "Persistent vs. temporary"],
  "Overlays": ["Full-screen overlay", "Overlay with dim background", "Overlay with blur"],
  "Chips": ["Filter chips", "Input chips", "Choice chips"],
  "Accordions": ["Basic accordion", "Icon + label accordion", "Nested accordion"],
  "Steppers": ["Horizontal stepper", "Vertical wizard", "Progress + step indicator"],
  "Calendars & Pickers": ["Date picker", "Time picker", "Date range picker"]
};

const imagePaths = { "Basic": [image, image], 
                      "Multi-Expand": ["/images/multi-expand1.png", "/images/multi-expand2.png"],
      /* other variants */ };

      export default function StorybookClone() {
        const [selectedComponent, setSelectedComponent] = useState("");
        const [selectedVariant, setSelectedVariant] = useState("");
        const [search, setSearch] = useState("");
        const [expandedComponents, setExpandedComponents] = useState([]);
        const [showDesc, setShowDesc] = useState(true);
      
        const filteredComponents = Object.keys(componentsList)
          .map((component) => {
            const matchedVariants = componentsList[component].filter((variant) =>
              variant.toLowerCase().includes(search.toLowerCase())
            );
            if (component.toLowerCase().includes(search.toLowerCase())) {
              return { component, variants: componentsList[component] };
            } else if (matchedVariants.length > 0) {
              return { component, variants: matchedVariants };
            }
            return null;
          })
          .filter(Boolean);
      
        const toggleComponent = (component) => {
          setExpandedComponents((prev) =>
            prev.includes(component)
              ? prev.filter((item) => item !== component)
              : [...prev, component]
          );
        };
      
        const handleComponentClick = (component, variant = "") => {
          setSelectedComponent(component);
          setSelectedVariant(variant);
          setShowDesc(false);
        };
      
        const handleAboutClick = () => {
          setShowDesc(true);
          setSelectedComponent("");
          setSelectedVariant("");
        };
      
        return (
          <div className="flex h-screen w-full font-figtree">
            <aside className="w-72 p-4 flex flex-col border-r border-gray-300 bg-white shadow-md">
              <img src={logo} alt="Tcules Logo" className="w-32 mx-auto mb-4" />
              <input
                type="text"
                placeholder="Find components"
                className="mt-2 p-2 rounded border border-gray-400 outline-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
          className={`mt-4 p-2 rounded w-full font-semibold text-black transition-all flex items-center gap-2`}
          onClick={handleAboutClick}
        >
          <Info className="w-5 h-5" /> About This
        </button>
              <div className="mt-4 flex-1 overflow-auto">
                {filteredComponents.map(({ component, variants }, index) => (
                  <div key={index}>
                    <button
                      className="w-full text-left p-2 font-medium hover:bg-gray-200 hover:text-blue-500 transition-all"
                      onClick={() => toggleComponent(component)}
                    >
                      {component}
                    </button>
                    {(expandedComponents.includes(component) || search) && (
                      <div className="ml-4 mt-1">
                        {variants.map((variant, idx) => (
                          <button
                            key={idx}
                            className="w-full text-left p-2 text-sm hover:bg-gray-200 hover:text-blue-700 transition-all"
                            onClick={() => handleComponentClick(component, variant)}
                          >
                            {variant}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </aside>
            <main className="flex-1 p-6 bg-gray-100 flex flex-col">
              {showDesc && !selectedComponent && (
                <div className="p-6 mb-6 bg-white shadow-md rounded-lg border border-gray-300">
                  <Desc />
                </div>
              )}
              {selectedComponent && (
                <>
                  <h1 className="text-2xl font-semibold text-gray-800">
                    {selectedComponent}
                  </h1>
                  {selectedVariant && (
                    <p className="text-gray-600 mt-2">Selected Variant: {selectedVariant}</p>
                  )}
                  {selectedVariant && imagePaths[selectedVariant] && (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
                      {imagePaths[selectedVariant].map((imgSrc, index) => (
                        <img
                          key={index}
                          src={imgSrc}
                          alt={`${selectedVariant} ${index + 1}`}
                          className="rounded shadow-md w-full h-auto"
                        />
                      ))}
                    </div>
                  )}
                </>
              )}
            </main>
          </div>
        );
      }