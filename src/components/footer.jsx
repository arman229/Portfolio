import React from "react";


function Footer() {
    return (
        <div className='pt-8 mt-4   '>
            <hr className="  border-gray-400 sm:mx-auto  "/>
            <div className={"flex  justify-between gap-3 flex-wrap p-3  "}>
                <p>Copyright © 2024 Portfolio</p>
                <p>
                    Design by. <span className={"font-bold"}>Arman Ashraf</span>
                </p>
                <p>
                    Code by.{" "}
                    <a
                        href={"https://github.com/arman229 "}
                        className={" hover:underline font-bold"}
                    >
                        arman229 on github{" "}
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Footer;
