webpackJsonp([0,2],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(8)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(3),
  /* template */
  __webpack_require__(7),
  /* scopeId */
  "data-v-0fcfc4a1",
  /* cssModules */
  null
)
Component.options.__file = "/home/hp2560/www/site/laravel-crud/node_modules/vue-image-crop-upload/upload.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] upload.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0fcfc4a1", Component.options)
  } else {
    hotAPI.reload("data-v-0fcfc4a1", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var mimes = {
    'jpg': 'image/jpeg',
    'png': 'image/png',
    'gif': 'image/gif',
    'svg': 'image/svg+xml',
    'psd': 'image/photoshop'
},

// 点击波纹效果
effectRipple = function effectRipple(e, arg_opts) {
    var opts = Object.assign({
        ele: e.target, // 波纹作用元素
        type: 'hit', // hit点击位置扩散　center中心点扩展
        bgc: 'rgba(0, 0, 0, 0.15)' // 波纹颜色
    }, arg_opts),
        target = opts.ele;
    if (target) {
        var rect = target.getBoundingClientRect(),
            ripple = target.querySelector('.e-ripple');
        if (!ripple) {
            ripple = document.createElement('span');
            ripple.className = 'e-ripple';
            ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px';
            target.appendChild(ripple);
        } else {
            ripple.className = 'e-ripple';
        }
        switch (opts.type) {
            case 'center':
                ripple.style.top = rect.height / 2 - ripple.offsetHeight / 2 + 'px';
                ripple.style.left = rect.width / 2 - ripple.offsetWidth / 2 + 'px';
                break;
            default:
                ripple.style.top = e.pageY - rect.top - ripple.offsetHeight / 2 - document.body.scrollTop + 'px';
                ripple.style.left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft + 'px';
        }
        ripple.style.backgroundColor = opts.bgc;
        ripple.className = 'e-ripple z-active';
        return false;
    }
},

// database64文件格式转换为2进制
data2blob = function data2blob(data, mime) {
    // dataURL 的格式为 “data:image/png;base64,****”,逗号之前都是一些说明性的文字，我们只需要逗号之后的就行了
    data = data.split(',')[1];
    data = window.atob(data);
    var ia = new Uint8Array(data.length);
    for (var i = 0; i < data.length; i++) {
        ia[i] = data.charCodeAt(i);
    };
    // canvas.toDataURL 返回的默认格式就是 image/png
    return new Blob([ia], { type: mime });
};

/* harmony default export */ __webpack_exports__["default"] = {
    props: {
        // 域，上传文件name，触发事件会带上（如果一个页面多个图片上传控件，可以做区分
        field: {
            type: String,
            'default': 'avatar'
        },
        // 类似于id，触发事件会带上（如果一个页面多个图片上传控件，可以做区分
        ki: {
            'default': 0
        },
        // 显示该控件与否
        value: {
            twoWay: true,
            'default': true
        },
        // 上传地址
        url: {
            type: String,
            'default': ''
        },
        // 其他要上传文件附带的数据，对象格式
        params: {
            type: Object,
            'default': null
        },
        //Add custom headers
        headers: {
            type: Object,
            'default': null
        },
        // 剪裁图片的宽
        width: {
            type: Number,
            default: 200
        },
        // 剪裁图片的高
        height: {
            type: Number,
            default: 200
        },
        // 不预览圆形图片
        noCircle: {
            type: Boolean,
            default: false
        },
        // 单文件大小限制
        maxSize: {
            type: Number,
            'default': 10240
        },
        // 语言类型
        langType: {
            type: String,
            'default': 'zh'
        },
        // 语言包
        langExt: {
            type: Object,
            'default': null
        },
        // 图片上传格式
        imgFormat: {
            type: String,
            'default': 'png'
        }
    },
    data: function data() {
        var that = this,
            imgFormat = that.imgFormat,
            langType = that.langType,
            langExt = that.langExt,
            width = that.width,
            height = that.height,
            isSupported = true,
            allowImgFormat = ['jpg', 'png'],
            langBag = {
            zh: {
                hint: '点击，或拖动图片至此处',
                loading: '正在上传……',
                noSupported: '浏览器不支持该功能，请使用IE10以上或其他现在浏览器！',
                success: '上传成功',
                fail: '图片上传失败',
                preview: '头像预览',
                btn: {
                    off: '取消',
                    close: '关闭',
                    back: '上一步',
                    save: '保存'
                },
                error: {
                    onlyImg: '仅限图片格式',
                    outOfSize: '单文件大小不能超过 ',
                    lowestPx: '图片最低像素为（宽*高）：'
                }
            },
            en: {
                hint: 'Click, or drag the file here',
                loading: 'Uploading……',
                noSupported: 'Browser does not support, please use IE10+ or other browsers',
                success: 'Upload success',
                fail: 'Upload failed',
                preview: 'Preview',
                btn: {
                    off: 'Cancel',
                    close: 'Close',
                    back: 'Back',
                    save: 'Save'
                },
                error: {
                    onlyImg: 'Image only',
                    outOfSize: 'Image exceeds size limit: ',
                    lowestPx: 'The lowest pixel in the image: '
                }
            },
            ru: {
                hint: 'Нажмите, или перетащите файл в это окно',
                loading: 'Загружаю……',
                noSupported: 'Ваш браузер не поддерживается, пожалуйста, используйте IE10 + или другие браузеры',
                success: 'Загрузка выполнена успешно',
                fail: 'Ошибка загрузки',
                preview: 'Предпросмотр',
                btn: {
                    off: 'Отменить',
                    close: 'Закрыть',
                    back: 'Назад',
                    save: 'Сохранить'
                },
                error: {
                    onlyImg: 'Только изображения',
                    outOfSize: 'Изображение превышает предельный размер: ',
                    lowestPx: 'Минимальный размер изображения: '
                }
            }
        },
            tempImgFormat = allowImgFormat.indexOf(imgFormat) === -1 ? 'jpg' : imgFormat,
            lang = langBag[langType] ? langBag[langType] : lang['zh'],
            mime = mimes[tempImgFormat];
        // 规范图片格式
        that.imgFormat = tempImgFormat;

        if (langExt) {
            Object.assign(lang, langExt);
        }
        if (typeof FormData != 'function') {
            isSupported = false;
        }
        return {
            // 图片的mime
            mime: mime,

            // 语言包
            lang: lang,

            // 浏览器是否支持该控件
            isSupported: isSupported,

            // 步骤
            step: 1, //1选择文件 2剪裁 3上传

            // 上传状态及进度
            loading: 0, //0未开始 1正在 2成功 3错误
            progress: 0,

            // 是否有错误及错误信息
            hasError: false,
            errorMsg: '',

            // 需求图宽高比
            ratio: width / height,

            // 原图地址、生成图片地址
            sourceImg: null,
            sourceImgUrl: '',
            createImgUrl: '',

            // 原图片拖动事件初始值
            sourceImgMouseDown: {
                on: false,
                mX: 0, //鼠标按下的坐标
                mY: 0,
                x: 0, //scale原图坐标
                y: 0
            },

            // 生成图片预览的容器大小
            previewContainer: {
                width: 100,
                height: 100
            },

            // 原图容器宽高
            sourceImgContainer: { // sic
                width: 240,
                height: 180
            },

            // 原图展示属性
            scale: {
                zoomAddOn: false, //按钮缩放事件开启
                zoomSubOn: false, //按钮缩放事件开启
                range: 1, //最大100
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                maxWidth: 0,
                maxHeight: 0,
                minWidth: 0, //最宽
                minHeight: 0,
                naturalWidth: 0, //原宽
                naturalHeight: 0
            }
        };
    },

    computed: {
        // 进度条样式
        progressStyle: function progressStyle() {
            var progress = this.progress;

            return {
                width: progress + '%'
            };
        },

        // 原图样式
        sourceImgStyle: function sourceImgStyle() {
            var scale = this.scale,
                sourceImgMasking = this.sourceImgMasking;

            return {
                top: scale.y + sourceImgMasking.y + 'px',
                left: scale.x + sourceImgMasking.x + 'px',
                width: scale.width + 'px',
                height: scale.height + 'px'
            };
        },

        // 原图蒙版属性
        sourceImgMasking: function sourceImgMasking() {
            var width = this.width,
                height = this.height,
                ratio = this.ratio,
                sourceImgContainer = this.sourceImgContainer,
                sic = sourceImgContainer,
                sicRatio = sic.width / sic.height,
                x = 0,
                y = 0,
                w = sic.width,
                h = sic.height,
                scale = 1;

            if (ratio < sicRatio) {
                scale = sic.height / height;
                w = sic.height * ratio;
                x = (sic.width - w) / 2;
            }
            if (ratio > sicRatio) {
                scale = sic.width / width;
                h = sic.width / ratio;
                y = (sic.height - h) / 2;
            }
            return {
                scale: scale, // 蒙版相对需求宽高的缩放
                x: x,
                y: y,
                width: w,
                height: h
            };
        },

        // 原图遮罩样式
        sourceImgShadeStyle: function sourceImgShadeStyle() {
            var sourceImgMasking = this.sourceImgMasking,
                sourceImgContainer = this.sourceImgContainer,
                sic = sourceImgContainer,
                sim = sourceImgMasking,
                w = sim.width == sic.width ? sim.width : (sic.width - sim.width) / 2,
                h = sim.height == sic.height ? sim.height : (sic.height - sim.height) / 2;

            return {
                width: w + 'px',
                height: h + 'px'
            };
        },
        previewStyle: function previewStyle() {
            var width = this.width,
                height = this.height,
                ratio = this.ratio,
                previewContainer = this.previewContainer,
                pc = previewContainer,
                w = pc.width,
                h = pc.height,
                pcRatio = w / h;

            if (ratio < pcRatio) {
                w = pc.height * ratio;
            }
            if (ratio > pcRatio) {
                h = pc.width / ratio;
            }
            return {
                width: w + 'px',
                height: h + 'px'
            };
        }
    },
    watch: {
        value: function value(newValue) {
            if (newValue) {
                this.reset();
            }
        }
    },
    methods: {
        // 点击波纹效果
        ripple: function ripple(e) {
            effectRipple(e);
        },

        // 关闭控件
        off: function off() {
            var that = this;
            setTimeout(function () {
                that.value = false;
            }, 200);
        },

        // 设置步骤
        setStep: function setStep(no) {
            var that = this;
            setTimeout(function () {
                that.step = no;
            }, 200);
        },


        /* 图片选择区域函数绑定
         ---------------------------------------------------------------*/
        preventDefault: function preventDefault(e) {
            e.preventDefault();
            return false;
        },
        handleClick: function handleClick(e) {
            if (this.loading !== 1) {
                if (e.target !== this.$els.fileinput) {
                    e.preventDefault();
                    if (document.activeElement !== this.$els) {
                        this.$els.fileinput.click();
                    }
                }
            }
        },
        handleChange: function handleChange(e) {
            e.preventDefault();
            if (this.loading !== 1) {
                var files = e.target.files || e.dataTransfer.files;
                this.reset();
                if (this.checkFile(files[0])) {
                    this.setSourceImg(files[0]);
                }
            }
        },

        /* ---------------------------------------------------------------*/

        // 检测选择的文件是否合适
        checkFile: function checkFile(file) {
            var that = this,
                lang = that.lang,
                maxSize = that.maxSize;
            // 仅限图片
            if (file.type.indexOf('image') === -1) {
                that.hasError = true;
                that.errorMsg = lang.error.onlyImg;
                return false;
            }

            // 超出大小
            if (file.size / 1024 > maxSize) {
                that.hasError = true;
                that.errorMsg = lang.error.outOfSize + maxSize + 'kb';
                return false;
            }
            return true;
        },

        // 重置控件
        reset: function reset() {
            var that = this;
            that.step = 1;
            that.loading = 0;
            that.hasError = false;
            that.errorMsg = '';
            that.progress = 0;
        },

        // 设置图片源
        setSourceImg: function setSourceImg(file) {
            var that = this,
                fr = new FileReader();
            fr.onload = function (e) {
                that.sourceImgUrl = fr.result;
                that.startCrop();
            };
            fr.readAsDataURL(file);
        },

        // 剪裁前准备工作
        startCrop: function startCrop() {
            var that = this,
                width = that.width,
                height = that.height,
                ratio = that.ratio,
                scale = that.scale,
                sourceImgUrl = that.sourceImgUrl,
                sourceImgMasking = that.sourceImgMasking,
                lang = that.lang,
                sim = sourceImgMasking,
                img = new Image();

            img.src = sourceImgUrl;
            img.onload = function () {
                var nWidth = img.naturalWidth,
                    nHeight = img.naturalHeight,
                    nRatio = nWidth / nHeight,
                    w = sim.width,
                    h = sim.height,
                    x = 0,
                    y = 0;
                // 图片像素不达标
                if (nWidth < width || nHeight < height) {
                    that.hasError = true;
                    that.errorMsg = lang.error.lowestPx + width + '*' + height;
                    return false;
                }
                if (ratio > nRatio) {
                    h = w / nRatio;
                    y = (sim.height - h) / 2;
                }
                if (ratio < nRatio) {
                    w = h * nRatio;
                    x = (sim.width - w) / 2;
                }
                scale.range = 0;
                scale.x = x;
                scale.y = y;
                scale.width = w;
                scale.height = h;
                scale.minWidth = w;
                scale.minHeight = h;
                scale.maxWidth = nWidth * sim.scale;
                scale.maxHeight = nHeight * sim.scale;
                scale.naturalWidth = nWidth;
                scale.naturalHeight = nHeight;
                that.sourceImg = img;
                that.createImg();
                that.setStep(2);
            };
        },

        // 鼠标按下图片准备移动
        imgStartMove: function imgStartMove(e) {
            var sourceImgMouseDown = this.sourceImgMouseDown,
                scale = this.scale,
                simd = sourceImgMouseDown;

            simd.mX = e.screenX;
            simd.mY = e.screenY;
            simd.x = scale.x;
            simd.y = scale.y;
            simd.on = true;
        },

        // 鼠标按下状态下移动，图片移动
        imgMove: function imgMove(e) {
            var _sourceImgMouseDown = this.sourceImgMouseDown,
                on = _sourceImgMouseDown.on,
                mX = _sourceImgMouseDown.mX,
                mY = _sourceImgMouseDown.mY,
                x = _sourceImgMouseDown.x,
                y = _sourceImgMouseDown.y,
                scale = this.scale,
                sourceImgMasking = this.sourceImgMasking,
                sim = sourceImgMasking,
                nX = e.screenX,
                nY = e.screenY,
                dX = nX - mX,
                dY = nY - mY,
                rX = x + dX,
                rY = y + dY;

            if (!on) return;
            if (rX > 0) {
                rX = 0;
            }
            if (rY > 0) {
                rY = 0;
            }
            if (rX < sim.width - scale.width) {
                rX = sim.width - scale.width;
            }
            if (rY < sim.height - scale.height) {
                rY = sim.height - scale.height;
            }
            scale.x = rX;
            scale.y = rY;
        },

        // 按钮按下开始放大
        startZoomAdd: function startZoomAdd(e) {
            var that = this,
                scale = that.scale;

            scale.zoomAddOn = true;

            function zoom() {
                if (scale.zoomAddOn) {
                    var range = scale.range >= 100 ? 100 : ++scale.range;
                    that.zoomImg(range);
                    setTimeout(function () {
                        zoom();
                    }, 60);
                }
            }
            zoom();
        },

        // 按钮松开或移开取消放大
        endZoomAdd: function endZoomAdd(e) {
            this.scale.zoomAddOn = false;
        },

        // 按钮按下开始缩小
        startZoomSub: function startZoomSub(e) {
            var that = this,
                scale = that.scale;

            scale.zoomSubOn = true;

            function zoom() {
                if (scale.zoomSubOn) {
                    var range = scale.range <= 0 ? 0 : --scale.range;
                    that.zoomImg(range);
                    setTimeout(function () {
                        zoom();
                    }, 60);
                }
            }
            zoom();
        },

        // 按钮松开或移开取消缩小
        endZoomSub: function endZoomSub(e) {
            var scale = this.scale;

            scale.zoomSubOn = false;
        },
        zoomChange: function zoomChange(e) {
            this.zoomImg(e.target.value);
        },

        // 缩放原图
        zoomImg: function zoomImg(newRange) {
            var that = this,
                sourceImgMasking = this.sourceImgMasking,
                sourceImgMouseDown = this.sourceImgMouseDown,
                scale = this.scale,
                maxWidth = scale.maxWidth,
                maxHeight = scale.maxHeight,
                minWidth = scale.minWidth,
                minHeight = scale.minHeight,
                width = scale.width,
                height = scale.height,
                x = scale.x,
                y = scale.y,
                range = scale.range,
                sim = sourceImgMasking,
                sWidth = sim.width,
                sHeight = sim.height,
                nWidth = minWidth + (maxWidth - minWidth) * newRange / 100,
                nHeight = minHeight + (maxHeight - minHeight) * newRange / 100,
                nX = sWidth / 2 - nWidth / width * (sWidth / 2 - x),
                nY = sHeight / 2 - nHeight / height * (sHeight / 2 - y);

            // 判断新坐标是否超过蒙版限制
            if (nX > 0) {
                nX = 0;
            }
            if (nY > 0) {
                nY = 0;
            }
            if (nX < sWidth - nWidth) {
                nX = sWidth - nWidth;
            }
            if (nY < sHeight - nHeight) {
                nY = sHeight - nHeight;
            }

            // 赋值处理
            scale.x = nX;
            scale.y = nY;
            scale.width = nWidth;
            scale.height = nHeight;
            scale.range = newRange;
            setTimeout(function () {
                if (scale.range == newRange) {
                    that.createImg();
                }
            }, 300);
        },

        // 生成需求图片
        createImg: function createImg(e) {
            var that = this,
                mime = that.mime,
                sourceImg = that.sourceImg,
                _that$scale = that.scale,
                x = _that$scale.x,
                y = _that$scale.y,
                width = _that$scale.width,
                height = _that$scale.height,
                scale = that.sourceImgMasking.scale,
                canvas = that.$els.canvas,
                ctx = canvas.getContext('2d');

            if (e) {
                // 取消鼠标按下移动状态
                that.sourceImgMouseDown.on = false;
            }
            ctx.clearRect(0, 0, that.width, that.height);
            ctx.drawImage(sourceImg, x / scale, y / scale, width / scale, height / scale);
            that.createImgUrl = canvas.toDataURL(mime);
        },

        // 上传图片
        upload: function upload() {
            var that = this,
                lang = this.lang,
                imgFormat = this.imgFormat,
                mime = this.mime,
                url = this.url,
                params = this.params,
                field = this.field,
                ki = this.ki,
                createImgUrl = this.createImgUrl,
                fmData = new FormData();

            fmData.append(field, data2blob(createImgUrl, mime), field + '.' + imgFormat);

            // 添加其他参数
            if ((typeof params === 'undefined' ? 'undefined' : _typeof(params)) == 'object' && params) {
                Object.keys(params).forEach(function (k) {
                    fmData.append(k, params[k]);
                });
            }

            // 监听进度回调
            var uploadProgress = function uploadProgress(event) {
                if (event.lengthComputable) {
                    that.progress = 100 * Math.round(event.loaded) / event.total;
                }
            };

            // 上传文件
            that.loading = 1;
            that.progress = 0;
            that.setStep(3);
            that.$dispatch('cropSuccess', createImgUrl, field, ki);
            new Promise(function (resolve, reject) {
                var client = new XMLHttpRequest();
                client.open('POST', url, true);
                client.onreadystatechange = function () {
                    if (this.readyState !== 4) {
                        return;
                    }
                    if (this.status === 200) {
                        resolve(JSON.parse(this.responseText));
                    } else {
                        reject(this.status);
                    }
                };
                client.upload.addEventListener("progress", uploadProgress, false); //监听进度\
                // 设置header
                if ((typeof headers === 'undefined' ? 'undefined' : _typeof(headers)) == 'object' && headers) {
                    Object.keys(headers).forEach(function (k) {
                        client.setRequestHeader(k, headers[k]);
                    });
                }
                client.send(fmData);
            }).then(
            // 上传成功
            function (resData) {
                if (that.value) {
                    that.loading = 2;
                    that.$dispatch('cropUploadSuccess', resData, field, ki);
                }
            },
            // 上传失败
            function (sts) {
                if (that.value) {
                    that.loading = 3;
                    that.hasError = true;
                    that.errorMsg = lang.fail;
                    that.$dispatch('cropUploadFail', sts, field, ki);
                }
            });
        }
    }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
exports.push([module.i, "\n@import \"./css/upload.css\"\r\n", ""]);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.value),
      expression: "value"
    }],
    staticClass: "vue-image-crop-upload"
  }, [_c('div', {
    staticClass: "vicp-wrap"
  }, [_c('div', {
    staticClass: "vicp-close",
    on: {
      "click": _vm.off
    }
  }, [_c('i', {
    staticClass: "vicp-icon4"
  })]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.step == 1),
      expression: "step == 1"
    }],
    staticClass: "vicp-step1"
  }, [_c('div', {
    staticClass: "vicp-drop-area",
    on: {
      "dragleave": _vm.preventDefault,
      "dragover": _vm.preventDefault,
      "dragenter": _vm.preventDefault,
      "click": _vm.handleClick,
      "drop": _vm.handleChange
    }
  }, [_c('i', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.loading != 1),
      expression: "loading != 1"
    }],
    staticClass: "vicp-icon1"
  }, [_c('i', {
    staticClass: "vicp-icon1-arrow"
  }), _vm._v(" "), _c('i', {
    staticClass: "vicp-icon1-body"
  }), _vm._v(" "), _c('i', {
    staticClass: "vicp-icon1-bottom"
  })]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.loading !== 1),
      expression: "loading !== 1"
    }],
    staticClass: "vicp-hint"
  }, [_vm._v(_vm._s(_vm.lang.hint))]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.isSupported),
      expression: "!isSupported"
    }],
    staticClass: "vicp-no-supported-hint"
  }, [_vm._v(_vm._s(_vm.lang.noSupported))]), _vm._v(" "), (_vm.step == 1) ? _c('input', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (false),
      expression: "false"
    }, {
      name: "el",
      rawName: "v-el:fileinput",
      arg: "fileinput"
    }],
    attrs: {
      "type": "file"
    },
    on: {
      "change": _vm.handleChange
    }
  }) : _vm._e()]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.hasError),
      expression: "hasError"
    }],
    staticClass: "vicp-error"
  }, [_c('i', {
    staticClass: "vicp-icon2"
  }), _vm._v(" " + _vm._s(_vm.errorMsg) + "\r\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "vicp-operate"
  }, [_c('a', {
    on: {
      "click": _vm.off,
      "mousedown": _vm.ripple
    }
  }, [_vm._v(_vm._s(_vm.lang.btn.off))])])]), _vm._v(" "), (_vm.step == 2) ? _c('div', {
    staticClass: "vicp-step2"
  }, [_c('div', {
    staticClass: "vicp-crop"
  }, [_c('div', {
    staticClass: "vicp-crop-left"
  }, [_c('div', {
    staticClass: "vicp-img-container"
  }, [_c('img', {
    directives: [{
      name: "el",
      rawName: "v-el:img",
      arg: "img"
    }],
    staticClass: "vicp-img",
    style: (_vm.sourceImgStyle),
    attrs: {
      "src": _vm.sourceImgUrl,
      "draggable": "false"
    },
    on: {
      "drag": _vm.preventDefault,
      "dragstart": _vm.preventDefault,
      "dragend": _vm.preventDefault,
      "dragleave": _vm.preventDefault,
      "dragover": _vm.preventDefault,
      "dragenter": _vm.preventDefault,
      "drop": _vm.preventDefault,
      "mousedown": _vm.imgStartMove,
      "mousemove": _vm.imgMove,
      "mouseup": _vm.createImg,
      "mouseout": _vm.createImg
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "vicp-img-shade vicp-img-shade-1",
    style: (_vm.sourceImgShadeStyle)
  }), _vm._v(" "), _c('div', {
    staticClass: "vicp-img-shade vicp-img-shade-2",
    style: (_vm.sourceImgShadeStyle)
  })]), _vm._v(" "), _c('div', {
    staticClass: "vicp-range"
  }, [_c('input', {
    attrs: {
      "type": "range",
      "step": "1",
      "min": "0",
      "max": "100"
    },
    domProps: {
      "value": _vm.scale.range
    },
    on: {
      "input": _vm.zoomChange
    }
  }), _vm._v(" "), _c('i', {
    staticClass: "vicp-icon5",
    on: {
      "mousedown": _vm.startZoomSub,
      "mouseout": _vm.endZoomSub,
      "mouseup": _vm.endZoomSub
    }
  }), _vm._v(" "), _c('i', {
    staticClass: "vicp-icon6",
    on: {
      "mousedown": _vm.startZoomAdd,
      "mouseout": _vm.endZoomAdd,
      "mouseup": _vm.endZoomAdd
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "vicp-crop-right"
  }, [_c('div', {
    staticClass: "vicp-preview"
  }, [_c('div', {
    staticClass: "vicp-preview-item"
  }, [_c('img', {
    style: (_vm.previewStyle),
    attrs: {
      "src": _vm.createImgUrl
    }
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.lang.preview))])]), _vm._v(" "), _c('div', {
    staticClass: "vicp-preview-item"
  }, [(!_vm.noCircle) ? _c('img', {
    style: (_vm.previewStyle),
    attrs: {
      "src": _vm.createImgUrl
    }
  }) : _vm._e(), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.lang.preview))])])])])]), _vm._v(" "), _c('div', {
    staticClass: "vicp-operate"
  }, [_c('a', {
    on: {
      "click": function($event) {
        _vm.setStep(1)
      },
      "mousedown": _vm.ripple
    }
  }, [_vm._v(_vm._s(_vm.lang.btn.back))]), _vm._v(" "), _c('a', {
    staticClass: "vicp-operate-btn",
    on: {
      "click": _vm.upload,
      "mousedown": _vm.ripple
    }
  }, [_vm._v(_vm._s(_vm.lang.btn.save))])])]) : _vm._e(), _vm._v(" "), (_vm.step == 3) ? _c('div', {
    staticClass: "vicp-step3"
  }, [_c('div', {
    staticClass: "vicp-upload"
  }, [_c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.loading === 1),
      expression: "loading === 1"
    }],
    staticClass: "vicp-loading"
  }, [_vm._v(_vm._s(_vm.lang.loading))]), _vm._v(" "), _c('div', {
    staticClass: "vicp-progress-wrap"
  }, [_c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.loading === 1),
      expression: "loading === 1"
    }],
    staticClass: "vicp-progress",
    style: (_vm.progressStyle)
  })]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.hasError),
      expression: "hasError"
    }],
    staticClass: "vicp-error"
  }, [_c('i', {
    staticClass: "vicp-icon2"
  }), _vm._v(" " + _vm._s(_vm.errorMsg) + "\r\n                ")]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.loading === 2),
      expression: "loading === 2"
    }],
    staticClass: "vicp-success"
  }, [_c('i', {
    staticClass: "vicp-icon3"
  }), _vm._v(" " + _vm._s(_vm.lang.success) + "\r\n                ")])]), _vm._v(" "), _c('div', {
    staticClass: "vicp-operate"
  }, [_c('a', {
    on: {
      "click": function($event) {
        _vm.setStep(2)
      },
      "mousedown": _vm.ripple
    }
  }, [_vm._v(_vm._s(_vm.lang.btn.back))]), _vm._v(" "), _c('a', {
    on: {
      "click": _vm.off,
      "mousedown": _vm.ripple
    }
  }, [_vm._v(_vm._s(_vm.lang.btn.close))])])]) : _vm._e(), _vm._v(" "), _c('canvas', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (false),
      expression: "false"
    }, {
      name: "el",
      rawName: "v-el:canvas",
      arg: "canvas"
    }],
    attrs: {
      "width": _vm.width,
      "height": _vm.height
    }
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0fcfc4a1", module.exports)
  }
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(9)("448ac2fe", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../css-loader/index.js!../vue-loader/lib/style-rewriter.js?id=data-v-0fcfc4a1&scoped=true!../vue-loader/lib/selector.js?type=styles&index=0!./upload.vue", function() {
     var newContent = require("!!../css-loader/index.js!../vue-loader/lib/style-rewriter.js?id=data-v-0fcfc4a1&scoped=true!../vue-loader/lib/selector.js?type=styles&index=0!./upload.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(10)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = { css: css, media: media, sourceMap: sourceMap }
    if (!newStyles[id]) {
      part.id = parentId + ':0'
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      part.id = parentId + ':' + newStyles[id].parts.length
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')
  var hasSSR = styleElement != null

  // if in production mode and style is already provided by SSR,
  // simply do nothing.
  if (hasSSR && isProduction) {
    return noop
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = styleElement || createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (!hasSSR) {
    update(obj)
  }

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ })
],[12]);