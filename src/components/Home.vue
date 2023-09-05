<template>
    <div class="container-ts">
        <Particles id="tsparticles" :particlesInit="particlesInit" :particlesLoaded="particlesLoaded" :options="{
            background: {
                color: {
                    value: '#0d47a1'
                }
            },
            fpsLimit: 60,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: 'push'
                    },
                    onHover: {
                        enable: true,
                        mode: 'bubble'
                    },
                    resize: true
                },
                modes: {
                    bubble: {
                        distance: 250,
                        duration: 2,
                        opacity: 0,
                        size: 0
                    },
                    push: {
                        quantity: 2
                    },
                    repulse: {
                        distance: 400
                    }
                }
            },
            particles: {
                color: {
                    value: '#ffffff'
                },
                links: {
                    color: '#ffffff',
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1
                },
                move: {
                    direction: 'none',
                    enable: true,
                    outMode: 'bounce',
                    random: true,
                    speed: 6,
                    straight: false
                },
                number: {
                    density: {
                        enable: true,
                        area: 800
                    },
                    value: 80
                },
                opacity: {
                    value: 0.5
                },
                shape: {
                    type: 'circle'
                },
                size: {
                    random: true,
                    value: 5
                }
            },
            detectRetina: true
        }" />
    </div>
    <img src="@/assets/images/UceWhite.png" class="center-image">
</template>

<script setup>
import { loadFull } from "tsparticles";
const particlesInit = async (engine) => {
    await loadFull(engine);
};
const particlesLoaded = async container => {
    console.log("Particles container loaded", container);
};
</script>

<style>
.container-ts{
  z-index: -1;
}</style>