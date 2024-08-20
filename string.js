const { client } = require("./client");

const init = async () => {
    // await client.set("msg:5", "hey from nodeJS");
    // await client.expire("msg:5", 10);
    console.log("<===== Strings =====>")
    const result = await client.get("msg:3");
    const result2 = await client.get("msg:5");
    console.log("=> ", { result, result2 });

    console.log("<===== Lists =====>")

    console.log("")
    // const listpush = await client.lpush("messages", "lpush op");
    // const listpush1 = await client.lpush("messages", "lpush2 op");
    const listPop1 = await client.blpop("messages", 40);
    console.log("Lists => ", {
        listPop1
    })
}

init(); 