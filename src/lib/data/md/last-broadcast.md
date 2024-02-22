---
title: Last Broadcast
date: 2023
type: Video Game
link: https://store.steampowered.com/app/2508870/Last_Broadcast/
tags:
  - UI/UX Design
  - Graphic Design
---

<script lang="ts">
  import ColorLink from "$lib/components/common/ColorLink.svelte";

  import banner from "$lib/images/md-assets/last-broadcast/banner.png";
  import pinboard from "$lib/images/md-assets/last-broadcast/pinboard.png";
  import assets from "$lib/images/md-assets/last-broadcast/ui-assets.jpg";
  import albumMock from "$lib/images/md-assets/last-broadcast/album-mockup.jpg";
  import itemMock from "$lib/images/md-assets/last-broadcast/item-mockup.jpg";
  import subtitleMock from "$lib/images/md-assets/last-broadcast/subtitle-mockup.png";
</script>

<img alt="Last Broadcast banner" src={banner}>

<div class="split-layout">
    <img alt="Last Broadcast in-game screenshot" src={pinboard}>
    <div>

        ### Introduction
        *<small>A 2022-2023 USC MFA Project</small>*

        An experimental narrative game set at a radio station at the end of the world. Host your last show as the sun turns red and the world burns down.

        <ColorLink
            href="https://store.steampowered.com/app/2508870/Last_Broadcast/"
            target="_blank"
            colorArt={false}
        >View it on Steam!</ColorLink>

    </div>

</div>

### UI Assets
A collection of assets I made for Last Broadcast.
<img alt="UI assets" src={assets}>


### UI Mockups
Not all of these made it to the final game.

<img alt="Dialogue mockup" src={subtitleMock}>
<img alt="Album selection mockup" src={albumMock}>
<img alt="Item closeup mockup" src={itemMock}>
