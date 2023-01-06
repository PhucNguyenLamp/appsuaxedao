file_picker_callback: function (cb, value, meta) {
            var input = document.createElement('input');
            input.setAttribute('type', 'file');
            input.setAttribute('accept', 'image/*');
            input.click();
            input.onchange = function () {
                var file = input.files[0];
                var url: string = "https://calista-dev.inetcloud.vn/hrm/vinaco/cedu/sys/cdn/file-download.cpx?docID=6233f1b7fe793f6977dc9e9b";
                console.log("file picked up", file);

                var handler: HttpHandler;
                var http = new HttpClient(handler);
                const formData: FormData = new FormData();
                formData.append('file', file);

                const req = new HttpRequest('POST', iNet.getPUrl("cedu/sys/cdn/file-upload"), formData, {
                    reportProgress: true
                });

                console.log("req", req);
                // console.log("res", http.request(req).toPromise());

                

                // http.request(req).subscribe(data => {
                //     console.log("data upload", data);
                // });

                cb(url, { title: file.name });

                
            }

            // cb(blobInfo.blobUri(), { title: file.name });
        }