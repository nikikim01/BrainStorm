<?hh // strict

namespace NicoleKim\Learning\Models;

use NicoleKim\Learning\Enums\JournalStatus;
use NicoleKim\Learning\Enums\JournalEmotion;

class JournalEntry(
    private string $id;
    private string $title;
    private string $content;
    private JournalEmotion $emotion;
    private \DateTime $date;
    private JournalStatus $status;
    private vec<string> $tags;
    private ?string $location;
    prviate ?string $photoAlbumLink;

    public function __construct(string $title, string $content, JournalEmotion $emotion){
        $this->id = uniqid();
        $this->title = $title;
        $this->content = $content;
        $this->emotion = $emotion;
        $this->date = new \DateTime();
        $this->status = JournalStatus::DRAFT;
        $this->tags = vec[];
        $this->location = null;
        $this->photoAlbumLink = null;
    }

    public function publish(): void {
        $this->status = JournalStatus::PUBLISHED;
    }

    public function edit(string $newContent): void {
        $this->content = $newContent;
    }
 // TODO: DELETING LOGIC
    public function delete(){}
   


    public function getID(): string {
        return $this->id;
    }

    public function getTitle(): string {
        return $this->title;
    }
    public function getContent(): string {
        return $this->content;
    }

    public function getEmotion(): JournalEmotion {
        return $this->emotion;
    }

    public function getDate(): \DateTime {
        return $this->date;
    }

    public function getStatus(): JournalStatus {
        return $this->status;
    }

    public function getTags(): vec<string> {
        return $this->tags;
    }

    public function getLocation(): ?string {
        return $this->location;
    }

    public function setLocation(?string $location): void {
        $this->location = $location;
    }

    public function getPhotoAlbumLink(): ?string {
        return $this->photoAlbumLink;
    }

    public function setPhotoAlbumLink(?string $photoAlbumLink): void {
        $this->photoAlbumLink = $photoAlbumLink;
    }

)