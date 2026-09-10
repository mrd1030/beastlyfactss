Two edits in src/pages/GuideDetail.jsx so a species can opt out of "Call the vet now."
Patched copy is at artifacts/batch-d-hermit-crab/GuideDetail.jsx (local).

1. Print card subtitle, around the emergency print HTML:
   Change
     <p class="sub">Call the vet now if you see any of these.</p>
   to
     <p class="sub">${esc(card.headline || 'Call the vet now if you see any of these.')}</p>
   and wrap the Vet/Phone/Emergency clinic fill-in so it only prints when there is no custom headline:
     ${card.headline ? '' : '<div class="fill">Vet:<span></span><br>Phone:<span></span><br>Emergency clinic:<span></span></div>'}

2. On-page card, same string:
   Change
     <p className="text-sm text-muted-foreground font-body mb-3">Call the vet now if you see any of these.</p>
   to
     <p className="text-sm text-muted-foreground font-body mb-3">{guide.emergencyCard.headline || "Call the vet now if you see any of these."}</p>

Default stays for every other router hub. Hermit crab sets emergencyCard.headline.
