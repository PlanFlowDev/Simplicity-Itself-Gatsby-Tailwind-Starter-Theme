import React from 'react';
import { Link } from 'gatsby';
import LandFarmImage from 'src/images/land-at-sunset.jpg';
import Layout from 'src/components/Layout';
import SEO from 'src/components/SEO';

const BlogPostPage = () => (
  <Layout>
    <SEO title="Post - Blog" />

    <div className="flex-grow max-w-4xl px-4 mx-auto mt-10 lg:px-0">
      <div className="flex flex-col md:flex-row">
        <div className="w-full">
          <img
            alt="featured image"
            src={LandFarmImage}
            className="w-full mb-10 g-image g-image--lazy g-image--loaded"
          ></img>
          <h1 className="mb-0">Our Wonderful Farm</h1>
          <p>
          <div className="flex flex-col mt-4 sm:flex-row">
              <span className="w-20 mb-4 mr-2 text-white sm:w-auto prd-tag bg-primary sm:mb-0">
                Farms
              </span>
              <span className="w-20 mr-2 text-white sm:w-auto prd-tag bg-brown-light">
                5 Min.
              </span>
              <span className="hidden mr-2 text-gray-600 bg-gray-100 md:block prd-tag">
                #organic
              </span>
              <span className="hidden text-gray-600 bg-gray-100 md:block prd-tag">
                #farming
              </span>
            </div>
          </p>
          <div className="font-light text-slim">
            <p>
              Have you ever imagined a place where you could travel and see only beauty? What would that be like? Could it really work in this day
              and age?
            </p>
            <p>
              <strong>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </strong>
            </p>
            <h2 className="head-3">
              Where Is The Farm?
            </h2>
            <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
            <h2 className="head-3">
              What Are The Rules?
            </h2>
            <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default BlogPostPage;
