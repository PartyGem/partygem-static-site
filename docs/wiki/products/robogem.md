# RoboGem

**Status:** ⏳ Future / long-term
**One-liner:** In the not so distant future, we'll send out RoboGem — a humanoid concierge to help guests check in and guide them across physical spaces and events.

---

## Why RoboGem

Embodied AI is coming. Most "robot concierge" attempts today fail because they're built on **no software substrate** — the robot doesn't know the guest list, the floor plan, the schedule, the sponsor activations, or the dietary restrictions. PartyGem AI already orchestrates all of that for PartyGem events. RoboGem is the **physical extension** of that intelligence into the venue itself.

If PartyGem knows every ticket holder and every session, and Venue Gem knows the floor plan and access rules, RoboGem knows who's walking up and what they should do next.

---

## What RoboGem might do (directional)

- **Check-in assistance.** Greet guests, verify tickets (QR + face-free visual ID if guests opt in), hand off to human staff for edge cases.
- **Wayfinding.** Guide guests to sessions, seats, restrooms, or VIP areas; multilingual by default.
- **FAQ + help.** Answer "what time does the keynote start?", "where's the coat check?", "is there a vegan option?" — grounded on the event's actual data, not a hallucination.
- **Inclusive support.** Work alongside human staff to support guests with mobility, sensory, or language needs.
- **Safety.** Escalate incidents to human security with situational context.

---

## Technical posture

- **PartyGem AI orchestration layer** remains the trust boundary. RoboGem never *owns* the ticket ledger; it **queries** it.
- **Hardware-agnostic.** We'd likely partner with a humanoid platform rather than build our own robot from scratch.
- **Latency + reliability first.** No cloud-only critical paths; on-device inference for latency-sensitive tasks.
- **Privacy by design.** No persistent biometric storage; guest data stays inside the PartyGem AI trust boundary.

---

## Why now (or rather, why "soon-ish")

- The **software layer** PartyGem AI is building now (identity, payments, entitlements, AI orchestration) is exactly what a useful embodied concierge requires.
- Humanoid platforms are maturing rapidly — RoboGem is more likely to ship as an **application layer** on top of third-party hardware than as a full-stack robot.
- Federal and commercial venues (conferences, training centers, expo halls) are natural first deployments.

---

## What we are **not** saying

- RoboGem is not on the near-term commercial roadmap. Service Gem and Venue Gem come first.
- RoboGem is not a replacement for human event staff; it's a collaborator.
- RoboGem is not an excuse to build a proprietary robotics stack; we plan to be picky, not heroic, on hardware.

## Naming note

"RoboGem" — one word, camel-cased (mirrors "PartyGem"). Not `Robo Gem`.
