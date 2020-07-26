import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

function TemplatePage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Template"
      />

    </Layout>
  );
}

export default TemplatePage;
