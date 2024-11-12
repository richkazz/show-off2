const GIST_ID = "5d92941e1b207547a21bfe8d1e354088";
const GIST_FILENAME = "resumedb.json";

export async function getData() {
    const req = await fetch(`https://api.github.com/gists/${GIST_ID}`);
    const gist = await req.json();
    console.log(gist);
    return JSON.parse(gist.files[GIST_FILENAME].content);
}
