importScripts("https://www.gstatic.com/firebasejs/10.4.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.4.0/firebase-messaging-compat.js");
const firebaseConfig = {
    apiKey: "AIzaSyANJCirj5ZvDWsQfdMUpJx17j1mx0KC-fo",
    authDomain: "classhelperv2.firebaseapp.com",
    projectId: "classhelperv2",
    storageBucket: "classhelperv2.appspot.com",
    messagingSenderId: "209308819145",
    appId: "1:209308819145:web:58893a1683b7eed174b718",
    measurementId: "G-CXRS9BMHER"
}
const app = firebase.initializeApp(firebaseConfig);
if (firebase.messaging.isSupported()) {
    self.addEventListener("push", (event) => {
        if (event.data) {
            // 알림 메세지일 경우엔 event.data.json().notification;
            const data = event.data.json().data;
            const options = {
                body: data.body,
                icon: data.image,
                data: {
                    click_action: data.click_action, // 이 필드는 밑의 클릭 이벤트 처리에 사용됨
                },
            };
        
            event.waitUntil(self.registration.showNotification(data.title, options));
        } else {
            console.log('This push event has no data.');
        }
    })
    self.addEventListener("notificationclick", (event) => {
        event.preventDefault()
        event.notification.close() // 알림창 닫기

        const urlToOpen = event.notification.data.click_action
        const promiseChain = clients
        .matchAll({
        type: 'window',
        includeUncontrolled: true,
        })
        .then(function (windowClients) {
            let matchingClient = null

            for (let i = 0; i < windowClients.length; i++) {
            const windowClient = windowClients[i]
            if (windowClient.url.includes(urlToOpen)) {
                matchingClient = windowClient
                break
            }
        }

        // 열려있다면 focus, 아니면 새로 open
        if (matchingClient) {
            return matchingClient.focus()
        } else {
            return clients.openWindow(urlToOpen)
        }
        })

        event.waitUntil(promiseChain);
    })
    self.addEventListener("install", () => {
        self.skipWaiting()
    })
    self.addEventListener('activate', () => {  
        console.log("fcm sw activate..")
    })
}