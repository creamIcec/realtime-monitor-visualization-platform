<script>
export default {
    props: {
        category: {
            type: String,
            required: false,
            default: "warn",
            validator: (value) => {
                return ["warn", "alert", "info"].includes(value);
            }
        },
        content: {
            type: String,
            required: true
        },
        instruct: {
            type: String,
            required: false
        }
    },
    data() {
        return {
            categories: ["warn", "alert", "info"]
        }
    }
}
</script>
<template>
    <div :class="'card neumorphism-card ' + 'card-' + this.category">
        <div class="category-icon-wrapper">
            <img :src="'./src/views/crackDetectionSimulate/components/state-card-assets/notification-' + this.category + '.svg'" :alt="this.category"
                class="category-icon">
        </div>
        <div class="main-part">
            <div class="detail-button-wrapper"></div>
            <div class="content">
                <div class="text-content">
                    <div class="main-text">{{ content }}</div>
                    <div class="instruct-text">{{ instruct }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.card {
    display: grid;
    grid-template-columns: 20% 80%;
    grid-template-rows: 100%;
    justify-content: center;
    align-items: center;

    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
}

.card-warn{
    background-color:  var(--warn-card-color);
}

.card-alert{
    background-color: var(--alert-card-color);
}

.card-info{
    background-color: var(--info-card-color);
}

.neumorphism-card {
    border-radius: 20px;
    box-shadow: inset 5px 5px 25px -2px var(--shadow-start),
                inset -5px -5px 25px -2px var(--shadow-start),
                0 0 20px -5px var(--shadow-end),
                0 0 20px -5px var(--shadow-end),
                0 0 8px -5px var(--shadow-end),
                0 0 8px -5px var(--shadow-end)
}

.category-icon-wrapper {
    grid-column: 1;
    width: 48px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.category-icon {
    width: 48px;
    height: 48px;
    margin-left: 50%;
}

.main-part{
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 16px 80% calc(20% - 16px);
    grid-template-columns: 100%;
}

.detail-button-wrapper {
    grid-row: 1;
    width: 100%;
    height: 100%;
}

.content {
    grid-row: 2;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 5%;
}

.text-content {
    width: calc(100% - 64px);
    height: 100%;
    display: flex;
    flex-direction: column;

    font-size: 12px;
    font-weight: 600;
}

.main-text {
    width: 100%;
    height: 100%;
    line-height: 16px;
    padding: 2px 0;
    color: var(--font-color);
}

.instruct-text {
    width: 100%;
    height: 100%;
    color: var(--tip-font-color);
}
</style>