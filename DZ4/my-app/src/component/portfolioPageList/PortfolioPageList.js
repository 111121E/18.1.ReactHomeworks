import React from "react";

export function PortfolioPageList ({portfolioPageList}) {
    return (
        <ul>
            {
                portfolioPageList.map((data, index) => <li key={index}>{data}</li>
              )
            }
        </ul>
    )
}
