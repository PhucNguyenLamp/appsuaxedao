export class CommonConstants {

    public static APP_NAME = "ceams";
    public static SHORT_TIMEOUT = 10;
    public static MEDIUM_TIMEOUT = 100;
    public static LONG_TIMEOUT = 1000;

    public static Retry = 3;

    public static InputElementSelector = "input:enabled:not([type='hidden']):not([type='file'])";

    public static editorDefaultConfig = {
        // base_url: '/tinymce',
        // suffix: '.min',
        height: 200,
        menubar: false,
        plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount codesample',
            'media'
        ],
        image_advtab: true,
        toolbar:
            'undo redo | formatselect | bold italic backcolor | \
                    alignleft aligncenter alignright alignjustify | \
                    image | quickimage | media | table | tableinsertdialog | \
                    bullist numlist outdent indent | codesample | removeformat | help',
        file_picker_callback: function (cb, value, meta) {
            var input = document.createElement('input');
            input.setAttribute('type', 'file');
            input.setAttribute('accept', 'image/*');
            input.click();
            input.onchange = () => {
                var file = input.files[0];
                var url: string = "https://calista-dev.inetcloud.vn/hrm/vinaco/cedu/sys/cdn/file-download.cpx?docID=6233f1b7fe793f6977dc9e9b";
            }

        }
    }

    // content_style:
    //         "body { font-size: 14pt;white-space: pre-wrap;}",

    public static editorDefaultConfig1 = {
        height: 200,
        menubar: false,
        plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount codesample',
            'media'
        ],
        image_advtab: true,
        content_style:
            "body { font-size: 14pt;}",
        // selector: 'textarea',
        toolbar:
            'undo redo | formatselect | bold italic underline backcolor forecolor fontsizeselect | \
                    alignleft aligncenter alignright alignjustify | \
                    image | quickimage | media | table | tableinsertdialog | \
                    bullist numlist outdent indent | codesample | removeformat | help',
        file_picker_callback: function (cb, value, meta) {
            var input = document.createElement('input');
            input.setAttribute('type', 'file');
            input.setAttribute('accept', 'image/*');
            input.click();
            input.onchange = () => {
                var file = input.files[0];
                var formData = new FormData();
                formData.append('file', file);
                formData.append('FILE_ID', "1234567890");
                $.ajax({
                    type: "POST",
                    url: iNet.getPUrl("cedu/sys/cdn/file-public-upload"),
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: function (data) {
                        createFile(data.elements[0]);
                        cb(iNet.getPUrl("cedu/sys/cdn/file-download") + "?docID=" + data.elements[0].uuid, { title: data.elements[0].name });
                    },
                    error: function (xhr, ajaxOptions, thrownError) {

                    }
                }).always(function () {

                });

                function createFile(data) {
                    // console.log("ajax", data);
                    var formData1 = new FormData();
                    formData1.append('organId', iNet.organId);
                    formData1.append('name', data.name);
                    formData1.append('mimetype', data.mimetype);
                    formData1.append('size', data.size);
                    formData1.append('contentUuid', data.uuid);

                    $.ajax({
                        type: "POST",
                        url: iNet.getPUrl("cedu/file/public-create"),
                        data: formData1,
                        processData: false,
                        contentType: false,
                        success: function (data) {
                            // console.log("file created");
                        },
                        error: function (xhr, ajaxOptions, thrownError) {

                        }
                    }).always(function () {
                    });
                }
            }
        }
    }
    public static editorDefaultConfig11 = {
        height: 200,
        menubar: false,
        plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount codesample',
            'media'
        ],
        image_advtab: true,
        toolbar:
            'image | quickimage | media | bold italic backcolor | \
        alignleft aligncenter alignright alignjustify | \
        table | tableinsertdialog | \
        bullist numlist outdent indent | codesample | removeformat | help',
        file_picker_callback: function (cb, value, meta) {
            var input = document.createElement('input');
            input.setAttribute('type', 'file');
            input.setAttribute('accept', 'image/*');
            input.click();
            input.onchange = () => {
                var file = input.files[0];
                var formData = new FormData();
                formData.append('file', file);
                formData.append('FILE_ID', "1234567890");
                $.ajax({
                    type: "POST",
                    url: iNet.getPUrl("cedu/sys/cdn/file-public-upload"),
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: function (data) {
                        createFile(data.elements[0]);
                        cb(iNet.getPUrl("cedu/sys/cdn/file-download") + "?docID=" + data.elements[0].uuid, { title: data.elements[0].name });
                    },
                    error: function (xhr, ajaxOptions, thrownError) {

                    }
                }).always(function () {

                });

                function createFile(data) {
                    // console.log("ajax", data);
                    var formData1 = new FormData();
                    formData1.append('organId', iNet.organId);
                    formData1.append('name', data.name);
                    formData1.append('mimetype', data.mimetype);
                    formData1.append('size', data.size);
                    formData1.append('contentUuid', data.uuid);

                    $.ajax({
                        type: "POST",
                        url: iNet.getPUrl("cedu/file/public-create"),
                        data: formData1,
                        processData: false,
                        contentType: false,
                        success: function (data) {
                            // console.log("file created");
                        },
                        error: function (xhr, ajaxOptions, thrownError) {

                        }
                    }).always(function () {
                    });
                }
            }
        }
    }


    public static editorDefaultConfig2 = {
        height: 200,
        menubar: false,
        plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount codesample',
            'media'
        ],
        image_advtab: true,
        toolbar:
            'image | quickimage | media | bold italic underline backcolor forecolor fontsizeselect | \
                    alignleft aligncenter alignright alignjustify | \
                    table | tableinsertdialog | \
                    bullist numlist outdent indent | codesample | removeformat | help',
        file_picker_callback: function (cb, value, meta) {
                        var input = document.createElement('input');
                        input.setAttribute('type', 'file');
                        input.setAttribute('accept', 'image/*');
                        input.click();
                        input.onchange = () => {
                            var file = input.files[0];
                            var formData = new FormData();
                            formData.append('file', file);
                            formData.append('FILE_ID', "1234567890");
                            $.ajax({
                                type: "POST",
                                url: iNet.getPUrl("cedu/sys/cdn/file-public-upload"),
                                data: formData,
                                processData: false,
                                contentType: false,
                                success: function (data) {
                                    createFile(data.elements[0]);
                                    cb(iNet.getPUrl("cedu/sys/cdn/file-download") + "?docID=" + data.elements[0].uuid, { title: data.elements[0].name });
                                },
                                error: function (xhr, ajaxOptions, thrownError) {
            
                                }
                            }).always(function () {
            
                            });
            
                            function createFile(data) {
                                // console.log("ajax", data);
                                var formData1 = new FormData();
                                formData1.append('organId', iNet.organId);
                                formData1.append('name', data.name);
                                formData1.append('mimetype', data.mimetype);
                                formData1.append('size', data.size);
                                formData1.append('contentUuid', data.uuid);
            
                                $.ajax({
                                    type: "POST",
                                    url: iNet.getPUrl("cedu/file/public-create"),
                                    data: formData1,
                                    processData: false,
                                    contentType: false,
                                    success: function (data) {
                                        // console.log("file created");
                                    },
                                    error: function (xhr, ajaxOptions, thrownError) {
            
                                    }
                                }).always(function () {
                                });
                            }
                        }
                    }
    }
}