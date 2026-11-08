import Site from "../../site";
import {posts} from "../../blog-data";
const post=posts[0];
export const metadata={title:post.title+" | ZEPAX Technology",description:post.description,alternates:{canonical:"/blog/meta-lead-ads-crm-follow-up-automation"},openGraph:{type:"article",title:post.title,description:post.description,url:"https://zepaxtechnology.com/blog/meta-lead-ads-crm-follow-up-automation"}};
export default function Page(){return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"BlogPosting",headline:post.title,description:post.description,datePublished:"2026-10-29",dateModified:"2026-10-29",author:{"@type":"Organization",name:"ZEPAX Technology",url:"https://zepaxtechnology.com"},publisher:{"@type":"Organization",name:"ZEPAX Technology"},mainEntityOfPage:"https://zepaxtechnology.com/blog/meta-lead-ads-crm-follow-up-automation"})}}/><Site page="/blog/meta-lead-ads-crm-follow-up-automation"/></>}
