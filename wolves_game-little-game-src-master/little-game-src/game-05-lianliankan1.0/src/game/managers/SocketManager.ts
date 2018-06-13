/**
 * 网络公共类
 * by dily
 * (c) copyright 2014 - 2035
 * All Rights Reserved. 
 * 存放网络公共方法 
 * 注意：是同步请求，不是异步
 */
module SocketManager {
    export class SocketIO {
        private _socketIO: SocketIOClient.Socket;
        private _isConnect: boolean = false;
        private _host: string = 'http://120.25.94.138';
        private _port: string = '3103';
        private _sendCacheList: Array<any> = [];//发送数据缓冲池
        private _seqToCallbackMap: Object = {};//消息序号与回调函数映射
        private _listenerTypeToCallbackMap: Object = {};//侦听类型与回调函数映射
        private static _sequence: number = 0;//消息序列号
        public constructor() {
            this.init();
        }
        public init(): void {
            if (DEBUG) {
                this._host = '192.168.1.188';
            }
            var socketUrl = "http://112.124.112.61:9092?_d=" + GameConfig.GAME_ID + "&_t=" + GameConfig.ROOM_ID + "&cid=" + Global.playerProxy.playerId;
            this._socketIO = io.connect(socketUrl);
            // this._socketIO = io.connect(this._host + ':' + this._port);
            this._socketIO.on('connect', (data) => {
                console.log("on connect")
                this._isConnect = true;
                while (this._sendCacheList.length > 0) {
                    let sendData: Object = this._sendCacheList.pop();
                    this.send(sendData['type'], sendData['info'], sendData['callback']);
                }
            });
        }
        /**
        * 获取消息序列号
        */
        private static getSequence(): number {
            if (SocketIO._sequence > 100) {
                SocketIO._sequence = 0;
            }
            ++SocketIO._sequence;
            return SocketIO._sequence;
        }
        /**
         * 侦听数据
         */
        public addListener(type: string, callback: Function): void {
            this._listenerTypeToCallbackMap[type] = callback;
            this._socketIO.on(type, callback);
        }
        /**
         * 删除数据
         */
        public removeListener(type: string): void {
            delete this._listenerTypeToCallbackMap[type];
        }
        /**
         * 发送数据给后端
         */
        public send(type: string, info?: Object, callback?: Function): void {
            if (this._isConnect) {
                if (callback != null) {
                    let seq: number = SocketIO.getSequence();
                    info['seq'] = seq;
                    this._seqToCallbackMap[seq] = callback;
                    this._socketIO.on(type, function (data: Object): void {
                        let seq: number = data['seq'];
                        let callback: Function = this._seqToCallbackMap[seq];
                        delete this._seqToCallbackMap[seq];
                        callback(data);
                        //console.log('respond type:'+type);
                    }.bind(this));
                }
                this._socketIO.emit(type, info);
                //console.log('request type:'+type);		
            }
            else {
                this._sendCacheList.push({ 'type': type, 'info': info, 'callback': callback });
            }
        }
        /**
         * 关闭连接
         */
        public close(): void {
            this._socketIO.close();
        }
    }
}



