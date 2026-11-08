import {getDb} from "../../../db";
import {inquiries} from "../../../db/schema";
export async function POST(request:Request){
try { const origin=request.headers.get("origin"); if(origin && origin!==new URL(request.url).origin) return Response.json({error:"Invalid request"},{status:403});
const b=await request.json() as Record<string, unknown>; if(b.website) return Response.json({ok:true});
if(typeof b.name!=="string" || !b.name.trim() || b.name.length>120 || typeof b.email!=="string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.email) || b.email.length>254 || typeof b.message!=="string" || b.message.trim().length<10 || b.message.length>5000 || typeof b.service!=="string" || b.service.length>100 || (b.company && (typeof b.company!=="string" || b.company.length>200))) return Response.json({error:"Please check your details and include at least 10 characters about your project."},{status:400});
await getDb().insert(inquiries).values({id:crypto.randomUUID(),name:b.name.trim(),email:b.email.trim(),company:typeof b.company === "string" ? b.company : "",service:b.service,message:b.message.trim(),createdAt:new Date().toISOString()});return Response.json({ok:true});
}catch{return Response.json({error:"We couldn't save your enquiry. Please try again."},{status:500})}}