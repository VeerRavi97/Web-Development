// https://www.w3schools.com/howto/howto_js_fullscreen.asp

async function takeScreenshot() {
    try {
        const response = await axios.get('http://localhost:3000/');
        let canvas = document.createElement('canvas');
        let context = canvas.getContext('2d');
        let img = document.querySelector('img');
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0);
        var myData = context.getImageData(0, 0, img.width, img.height);
        // console.log(myData);
        // console.log("handle response");
        // console.log(response.data);

        canvas.toBlob((blob) => {

            try {
                navigator.clipboard.write([
                        new ClipboardItem({
                            'image/png': blob
                        })
                    ]).then(() => console.log("clipped successfully"))
                    .catch((err) => console.log("clip failed ", err));

            } catch (error) {
                console.error(error);
            }

        })

    } catch (error) {
        alert(error);
        console.log(error);
    }


}


console.log(document.fullscreenElement);

function toggleFullScreen(e) {


    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        // axios.get('http://localhost:3000/')
        //     .then(res => console.log(res))
        //     .catch(err => console.log(err));

        // console.log(document.fullscreenElement);
        // try {

        setTimeout(takeScreenshot, 4000)
        //     const response = await axios.get('http://localhost:3000/');
        //     let canvas = document.createElement('canvas');
        //     let context = canvas.getContext('2d');
        //     let img = document.querySelector('img');
        //     canvas.width = img.width;
        //     canvas.height = img.height;
        //     context.drawImage(img, 0, 0);
        //     var myData = context.getImageData(0, 0, img.width, img.height);
        //     // console.log(myData);
        //     // console.log("handle response");
        //     // console.log(response.data);

        //     canvas.toBlob((blob) => {

        //         try {
        //             navigator.clipboard.write([
        //                     new ClipboardItem({
        //                         'image/png': blob
        //                     })
        //                 ]).then(() => console.log("clipped successfully"))
        //                 .catch((err) => console.log("clip failed ", err));

        //         } catch (error) {
        //             console.error(error);
        //         }

        //     })

        // } catch (error) {
        //     alert(error);
        //     console.log(error);
        // }
    } else {
        if (document.exitFullscreen) {
            alert("Exiting");
            console.log(document.fullscreenElement);
            document.exitFullscreen();
        }
    }
}



document.addEventListener("keypress", toggleFullScreen);