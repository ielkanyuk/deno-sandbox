import { qrcode } from "https://deno.land/x/qrcode/mod.ts";

const img = await qrcode('http://ielkanyuk.ru');

const encoder = new TextEncoder();

const data = encoder.encode(`<img src="${img}"/>`)

await Deno.writeFile('qr.html', data);