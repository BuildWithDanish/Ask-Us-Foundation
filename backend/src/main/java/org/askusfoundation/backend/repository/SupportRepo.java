package org.askusfoundation.backend.repository;

import org.askusfoundation.backend.entity.SupportEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SupportRepo extends JpaRepository<SupportEntity, Long> {
}
