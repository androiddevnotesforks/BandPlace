import React from "react";
import { Git, LinkedIn } from "../icons";

export const StorefrontFooter = () => {
    return (
        <footer className="storefront-footer">
            <ul>
                <li>
                    <a href="https://github.com/sgelernter" target="_blank">
                        < Git />
                        GitHub
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/sam-gelernter/" target="_blank">
                        < LinkedIn />
                        LinkedIn
                    </a>
                </li>
                {/* <li>
                    Other
                </li>
                <li>
                    Fun
                </li>
                <li>
                    <a href="https://www.youtube.com/watch?v=InbaU387Wl8" target="_blank">
                        Stuff
                    </a>
                </li> */}
            </ul>
        </footer>
    )
};