
export  function PortfolioPageList ({portfolioPageList}) {
    return (
        <ul>
            {
                portfolioPageList.map ((data,i) => <li key={i}>{data}</li>)
            }

        </ul>
    )
}