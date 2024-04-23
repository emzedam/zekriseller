<template>
    <div>
        <div class="streamModal" ref="streamModal">
            <span class="closeStream" @click="closeStream()">&times;</span>
            <div id="episodePlayer"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'player',
    props: {
        playMovie: {
            type: Boolean,
            required: true
        }
    },
    watch: {
        playMovie: function (value) {
            if (value == true) {
                this.$refs.streamModal.classList.remove("hide");
                this.$refs.streamModal.classList.add("show");
            } else {
                this.$refs.streamModal.classList.remove("show")
                this.$refs.streamModal.classList.add("hide")
            }
        }
    },
    methods: {
        closeStream() {
            this.$emit('unsetPlayerModal')
        },
    }
}
</script>

<style scoped>
.streamModal {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 100px;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgb(232, 232, 232);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transition: .2s all ease-in-out;
}

.streamModal.show {
    animation-name: showStream;
    animation-duration: .3s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
}

.streamModal.hide {
    animation-name: hideStream;
    animation-duration: .3s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
}

@keyframes showStream {
    0% {
        opacity: 0;
        visibility: hidden;
        top: 100px;
    }

    100% {
        opacity: 1;
        visibility: visible;
        top: 0;
    }
}

@keyframes hideStream {
    0% {
        opacity: 1;
        visibility: visible;
        top: 0;
    }

    100% {
        opacity: 0;
        visibility: hidden;
        top: 100px;
    }
}

.closeStream {
    position: absolute;
    color: #3eb3fb;
    top: 15px;
    left: 15px;
    width: 40px;
    height: 55px;
    z-index: 100000;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    font-size: 64px;
    cursor: pointer;
}


</style>