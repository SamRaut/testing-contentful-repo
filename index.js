import React from "react";
import './blockquote.css';

function BlockQuote({quote, quoteCite}) {
  const { blockQuoteBody } = quote;
  const { blockQuoteCiteText } = quoteCite;
    
  return (
    <figure>
      <blockquote>
        { quote }
      </blockquote>
      <figcaption>
        <cite>
          { quoteCite }
        </cite>
      </figcaption>
    </figure>
  );
}

export default BlockQuote;